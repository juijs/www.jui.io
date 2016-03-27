// Transaction caching data
var txData = [];

// Active Service
function getDataForActiveService() {
    var data = [];

    for(var i = 1; i <= 5; i++) {
        data.push({
            server: "W" + i,
            normal: randomValue(0, 20),
            warning: randomValue(0, 10),
            fatal: randomValue(0, 5)
        });
    }

    return data;
}

// Response Time
function getDataForResponseTime(count) {
    var data = [];

    for(var i = 0; i < count; i++) {
        data.push({
            w1: randomValue(4000, 1000),
            w2: randomValue(3000, 1500),
            w3: randomValue(6000, 500),
            w4: randomValue(2000, 750),
            w5: randomValue(7000, 250)
        });
    }

    return data;
}

// TPS
function getDataForTPS(count) {
    var data = [];

    for(var i = 0; i < count; i++) {
        data.push({
            w1: randomValue(50, 5),
            w2: randomValue(70, 5),
            w3: randomValue(60, 5),
            w4: randomValue(50, 5),
            w5: randomValue(30, 5)
        });
    }

    return data;
}

// Today's TPS & concurrent user
function getDataForToday(count) {
    var data = [];

    for(var i = 0; i < count; i++) {
        data.push({
            tps: randomValue(50, 5),
            user: randomValue(1000, 100)
        });
    }

    return data;
}

// Hourly call count & visitor
function getDataForHours() {
    var data = [],
        now = new Date();

    for(var i = 0; i < 24; i++) {
        data.push({
            hours: i,
            callcount: randomValue(10000, 2000),
            visitor: randomValue(5000, 1000),
            today: (i <= now.getHours()) ? true : false
        });
    }

    return data;
}

// Visitor location
function getDataForWorldMap() {
    var keys = [ "KR", "CN", "US", "FR", "BR", "AU", "JP", "IN", "RU", "GB" ],
        data = [];

    for(var i = 0; i < keys.length; i++) {
        var value = randomValue(1000, 5000);

        if(keys[i] == "KR") {
            value = randomValue(5000, 1000);
        } else if(keys[i] == "CN" || keys[i] == "RU") {
            value = randomValue(3000, 2000);
        } else if(keys[i] == "JP" || keys[i] == "IN") {
            value = randomValue(2000, 3000);
        }

        data.push({
            id: keys[i], value: value
        });
    }

    return data;
}

// Visitor type
function getDataForVisitor() {
    var desktopRate = randomValue(50, 50),
        visits = randomValue(10000, 5000);

    return [
        { title : "OVERALL VISITS", value : visits, max : 15000, min : 0 },
        { title : "MOBILE RATE", value : 100 - desktopRate, max : 100, min : 0 },
        { title : "DESKTOP RATE", value : desktopRate, max : 100, min : 0 }
    ];
}

// Transaction view
function initTransactionData(domain) {
	var ten_minutes = 1000 * 60 * 10;

	for(var i = 0; i < ten_minutes; i++) {
		var type = Math.floor(Math.random() * 6),
			seq = Math.floor(Math.random() * 500);

		if(seq !== 0) continue;

		var data = {
			delay: Math.floor(Math.random() * 10000),
			level: "normal",
			time: new Date(domain[0].getTime() + i)
		};

		if (type > 2 && type < 5) {
			data.level = "warning";
		} else if (type > 4) {
			data.level = "fatal";
		}

		txData.push(data);
	}
}

function addTransactionData(domain) {
    var count = Math.floor(Math.random() * 10);

    for(var i = 0; i < txData.length; i++) {
        if(txData[i].time.getTime() < domain[0].getTime()) {
            txData.shift();
        } else {
            break;
        }
    }

    for(var i = 0; i < count; i++) {
        var type = Math.floor(Math.random() * 6),
            data = {
                delay: Math.floor(Math.random() * 10000),
                level: "normal",
                time: domain[1]
            };

        if(type > 2 && type < 5) {
            data.level = "warning";
        } else if(type > 4) {
            data.level = "fatal";
        }

        txData.push(data);
    }
}

setInterval(function() {
    var domain = pastTimeInterval(5);

    // Active service
    dashboard_top.axis(0).update(getDataForActiveService());

    // Response time
    var responseTimeData = dashboard_top.axis(1).data;
    dashboard_top.axis(1).set("x", { domain: domain });

    if(responseTimeData.length == 0) {
        dashboard_top.axis(1).update(getDataForResponseTime(300));
    } else if(responseTimeData.length == 300) {
        responseTimeData.shift();
        responseTimeData.push(getDataForResponseTime(1)[0]);
        dashboard_top.axis(1).update(responseTimeData);
    }

    // TPS
    var tpsData = dashboard_top.axis(2).data;
    dashboard_top.axis(2).set("x", { domain: domain });

    if(tpsData.length == 0) {
        dashboard_top.axis(2).update(getDataForTPS(300));
    } else if(tpsData.length == 300) {
        tpsData.shift();
        tpsData.push(getDataForTPS(1)[0]);
        dashboard_top.axis(2).update(tpsData);
    }

    // Today's TPS & concurrent user
    var todaysTpsData = dashboard_top.axis(3).data,
        todaysUserData = dashboard_top.axis(4).data,
        splitIndex = getTimeToIndex();

    if(todaysTpsData.length == 0) {
        dashboard_top.axis(3).update(getDataForToday(1440));
        dashboard_top.axis(4).update(getDataForToday(1440));
    } else if(todaysTpsData.length == 1440) {
        if(domain[1].getSeconds() == 0) {
            var data = getDataForToday(1)[0];

            todaysTpsData.shift();
            todaysTpsData.push(data);
            todaysUserData.shift();
            todaysUserData.push(data);

            dashboard_top.axis(3).update(todaysTpsData);
            dashboard_top.axis(4).update(todaysUserData);
        }
    }

    dashboard_top.updateBrush(3, { split: splitIndex });
    dashboard_top.updateBrush(4, { split: splitIndex });
    dashboard_top.updateBrush(5, { split: splitIndex });
    dashboard_top.updateBrush(6, { split: splitIndex });

    // Chart rendering
    dashboard_top.render();
}, 1000);

setInterval(function() {
    var domain = pastTimeInterval(10);

    /// Hourly call count & visitor
    if(dashboard_bottom.axis(0).data.length == 0 || domain[1].getMinutes() == 0) {
        var hoursData = getDataForHours(),
            focusIndex = {
                start: domain[1].getHours(),
                end: domain[1].getHours()
            };

        dashboard_bottom.updateBrush(1, focusIndex);
        dashboard_bottom.updateBrush(3, focusIndex);
        dashboard_bottom.axis(0).update(hoursData);
        dashboard_bottom.axis(1).update(hoursData);
    }

    // Transaction view
    if(txData.length == 0) {
		initTransactionData(domain);
	} else {
		addTransactionData(domain);
	}

    dashboard_bottom.axis(2).update(txData);
    dashboard_bottom.axis(2).set("x", { domain: domain });

    // Chart rendering
    dashboard_bottom.render();
}, 2000);

setInterval(function() {
    // Visitor location
    visitor_map.axis(0).update(getDataForWorldMap());
    visitor_map.render();

    // Visitor type
    visitor_type.axis(0).update(getDataForVisitor());
    visitor_type.render();
}, 3000);
