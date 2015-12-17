var chart = jui.include("chart.builder");
var time = jui.include("util.time");

function getNumber() {
    return Math.round(Math.random() * 30  % 20);
}

var start = new Date(),
    end = time.add(start, time.hours, 5),
    data = [];

for(var i = 0; i < 30; i++) {
    data.push({
        time : time.add(start, time.minutes, i*10),
        sales : getNumber(),
        profit : getNumber() * 0.75,
        total : getNumber() * 1.5
    });
}

chart("#chart", {
    padding : {
        left : 70
    },
    axis : {
        x : {
            type : "date",
            domain : [ start, end ],
            interval : 1000 * 60 * 60, // 1hours
            format : "hh:mm",
            key: "time",
            line : true
        },
        y : {
            type : "range",
            domain : "total",
            step : 10,
            line : true
        },
        data : data
    },
    brush : {
        type : "scatter",
        size : 7,
        target : [ "sales", "profit", "total" ]
    },
    widget : [{
        type : "title",
        text : "Scatter Sample"
    }, {
        type : "cross",
        xFormat : function(d) {
            return time.format(d, "hh:mm");
        },
        yFormat : function(d) {
            return Math.round(d);
        }
    }, {
        type : "tooltip"
    }]
});
