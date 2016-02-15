var chart = jui.include("chart.builder");

chart("#chart-content", {
    padding : {
        left: 75
    },
    axis : [{
        x : {
            type : "range",
            domain : function(d) {
                return Math.max(d.normal, d.warning, d.fatal);
            },
            step : 5,
            line : true
        },
        y : {
            domain : [ "1 year ago", "1 month ago", "Yesterday", "Today" ],
            line : true
        },
        data : [
            { normal : 5, warning : 15, fatal : 5 },
            { normal : 25, warning : 8, fatal : 5 },
            { normal : 12, warning : 4, fatal : 10 },
            { normal : 18, warning : 5, fatal : 7 }
        ]
    }],
    brush : [{
        type : "equalizerbar",
        target : [ "normal", "warning", "fatal" ],
        unit : 10
    }],
    widget : [{
        type : "title",
        text : "Equalizer Sample",
        align: "end"
    }, {
        type : "tooltip"
    }, {
        type : "legend"
    }]
});
