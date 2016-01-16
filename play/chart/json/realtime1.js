var builder = jui.include("chart.builder"),
    time = jui.include("util.time"),
    tpsData = getTPSData(1440),
    tpsIndex = getTimeToIndex(),
    memoryData = getMemoryData(300);

var chart = builder("#chart", {
    height : 600,
    axis : [{
        x : {
            type : "dateblock",
            domain : [ new Date("2016/01/01"), new Date("2016/01/02") ],
            interval : time.HOUR, // Only milliseconds
            format : function(d, i) {
                return i;
            }
        },
        y : {
            type : "range",
            domain : [ 0, 100 ],
            step : 4
        },
        area : {
            height: "40%"
        },
        data : tpsData
    }, {
        x : {
            type : "dateblock",
            realtime : "minutes",
            interval : 1, // But number for the real-time basis
            format : "HH:mm"
        },
        y : {
            type : "range",
            domain : [ 0, 1024 ],
            step : 4,
            line : "solid"
        },
        area : {
            y : "60%",
            height : "40%"
        },
        data : memoryData
    }],
    brush : [{
        type : "splitarea",
        target : [ "tps" ],
        split : tpsIndex,
        axis : 0
    }, {
        type : "pin",
        split : tpsIndex,
        axis : 0,
        format : function(d) {
            return time.format(d, "HH:mm");
        }
    }, {
        type : "line",
        target : [ "memory" ],
        axis : 1
    }],
    widget : [{
        type : "title",
        text : "Today's TPS",
        align : "end"
    }, {
        type : "cross",
        xFormat : function(d) {
            return time.format(d, "HH:mm");
        },
        yFormat : function(d) {
            return Math.round(d);
        },
        axis : 0
    }, {
        type : "cross",
        yFormat : function(d) {
            return Math.round(d);
        },
        axis : 1
    }, {
        type : "title",
        text : "Memory Usage (MB)",
        align : "end",
        dy : 300
    }],
    render : false
});

clearInterval(window.interval);
window.interval = setInterval(function() {
    updateTPS();
    updateMemory();

    chart.render();
}, 1000);

function updateTPS() {
    var now = new Date();

    if(now.getSeconds() == 0) {
        var index = getTimeToIndex();

        if(tpsData.length == 1440) {
            tpsData.shift();
            tpsData.push(getTPSData(1)[0]);
            chart.axis(0).update(tpsData);
        }

        chart.updateBrush(0, { split: index });
        chart.updateBrush(1, { split: index });
    }
}

function getTPSData(count) {
    var data = [];

    for(var i = 0; i < count; i++) {
        data.push({ tps: Math.floor(Math.random() * 5) + 50 });
    }

    return data;
}

function getTimeToIndex() {
    var now = new Date();
    return now.getHours() * 60 + now.getMinutes();
}

function updateMemory() {
    var axis = chart.axis(1);

    if(memoryData.length == 300) {
        memoryData.shift();
        memoryData.push(getMemoryData(1)[0]);
        axis.update(memoryData);
    }

    axis.updateGrid("x", {
        domain : [ new Date() - time.MINUTE * 5, new Date() ]
    });
}

function getMemoryData(count) {
    var data = [];

    for(var i = 0; i < count; i++) {
        data.push({ memory: (Math.floor(Math.random() * 60) == 1) ? 700 : 300 });
    }

    return data;
}