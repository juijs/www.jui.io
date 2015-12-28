var chart = jui.include("chart.builder"),
    time = jui.include("util.time");
var today = getTodayData();

chart("#chart", {
    axis : {
        x : {
            type : "date",
            domain : [ today.start, today.end ],
            interval : 1000 * 60 * 60, // 1hours
            format : "HH",
            key: "time"
        },
        y : {
            type : "range",
            step : 10,
            domain : function(d) {
                return 600;
            }
        },
        data : today.data,
        buffer : today.data.length
    },
    brush : [{
        type : "splitarea",
        target : "value",
        split : 500
    }, {
        type : "pin",
        split : 500
    }],
    widget : [{
        type : "title",
        text : "Area Sample"
    }],
    style : {
        lineSplitBorderColor: "#929292"
    }
});
