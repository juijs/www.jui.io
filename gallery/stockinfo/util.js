function getPerformanceData(start, end) {
    var result = [],
        cache = {}

    for(var i = start; i <= end; i++) {
        var v = data[i],
            y = v.date.getFullYear(),
            p = cache[y];

        if(!p) {
            p = {
                year: y,
                count: 0,
                absGain: 0,
                fluctuation: 0,
                sumIndex: 0,
                avgIndex: 0,
                percentageGain: 0,
                fluctuationPercentage: 0
            };
        }

        ++p.count;
        p.absGain += v.close - v.open;
        p.fluctuation += Math.abs(v.close - v.open);
        p.sumIndex += (v.open + v.close) / 2;
        p.avgIndex = p.sumIndex / p.count;
        p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
        p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;

        cache[y] = p;
    }

    for(var key in cache) {
        result.push(cache[key]);
    }

    return result;
}

function getLossAndGainData(start, end) {
    var result = [{
        loss: 0,
        gain: 0
    }];

    for(var i = start; i <= end; i++) {
        if(data[i].open > data[i].close) {
            result[0].loss += 1;
        } else {
            result[0].gain += 1;
        }
    }

    result[0].loss = Math.round(result[0].loss / (end - start) * 100);
    result[0].gain = Math.round(result[0].gain / (end - start) * 100);

    return result;
}

function getQuarterData(start, end) {
    var result = [{
        1: 0,
        2: 0,
        3: 0,
        4: 0
    }];

    for(var i = start; i <= end; i++) {
        result[0][data[i].quarter] += 1;
    }

    return result;
}

function getDayOfWeekData(start, end) {
    var keys = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
        result = [];

    for(var i = 0; i < keys.length; i++) {
        result.push({
            day: i,
            dayStr: keys[i],
            value: 0
        });
    }

    for(var i = start; i <= end; i++) {
        result[data[i].day].value += 1;
    }

    result.shift();
    result.pop();

    return result;
}

function getFluctuationData(start, end) {
    var result = [],
        cache = {};

    for(var i = start; i <= end; i++) {
        var per = Math.round((data[i].close - data[i].open) / data[i].open * 100);

        if(!cache[per]) {
            cache[per] = 0;
        }

        cache[per] += 1;
    }

    for(var key in cache) {
        result.push({
            percent: parseInt(key),
            count: cache[key]
        });
    }

    return result;
}

function getDailyTableData(start, end) {
    var _ = jui.include("util.base"),
        result = [];

    for(var i = start; i <= end; i++) {
        var d = _.extend({
            date: _.dateFormat(data[i].date, "yyyy-MM-dd"),
            change: (data[i].close - data[i].open).toFixed(2)
        }, data[i], true);

        result.push(d);
    }

    return result;
}

function getYearIndexes(year) {
    var start = null,
        end = null;

    for(var i = 0; i < data.length; i++) {
        if(data[i].date.getFullYear() == year) {
            if(start == null) {
                start = i;
            }
        } else {
            if(start != null && end == null) {
                end = i;
            }
        }
    }

    return {
        start: start,
        end: end
    };
}