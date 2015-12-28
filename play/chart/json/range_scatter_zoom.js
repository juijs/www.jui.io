var chart = jui.include("chart.builder"),
    time = jui.include("util.time");

var start = new Date("2015/05/01 00:00:00"),
    end = new Date("2015/05/01 01:00:00")
    data = [];

for(var i = 0; i < 1000; i++) {
    data.push({
        time : time.add(start, time.seconds, Math.round(Math.random() * 3600)),
        delay : Math.round(Math.random() * 1000),
        error : Math.round(Math.random() * 100)
    });
}

chart("#chart", {
    axis : {
        x : {
            type : "date",
            domain : [ start, end ],
            interval : 1000 * 60 * 10, // 1minutes
            format : "hh:mm",
            key: "time",
            line : true
        },
        y : {
            type : "range",
            domain : [ 0, 1000 ],
            step : 5,
            line : true
        },
        data : data
    },
    brush : [{
        type : "scatter",
        symbol : "cross",
        target : "delay",
        size : 5,
        colors : function(d) {
            if(d.error > 70) return "red";
            else if(d.error > 50) return "orange";
            else if(d.error > 30) return "yellow";

            return "blue";
        }
    }],
    widget : [{
        type : "title",
        text : "Scatter Sample"
    }, {
        type : "zoom",
        interval : function(stime, etime) {
            var dist = etime - stime;

            if(dist < 1000 * 60) {
                return 1000 * 10; // 10seconds
            } else if(dist < 1000 * 60 * 10) {
                return 1000 * 60; // 1minutes
            }

            return 1000 * 60 * 10; // 10minutes
        },
        format : function(stime, etime) {
            var dist = etime - stime;

            if(dist < 1000 * 60) {
                return "hh:mm:ss";
            }

            return "hh:mm";
        }
    }]
});
