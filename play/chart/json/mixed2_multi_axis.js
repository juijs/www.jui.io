var chart = jui.include("chart.builder");
var data = [
    { month : "Jan", rainfall : 49.9, sealevel : 1016, temperature : 7.0},
    { month : "Feb", rainfall : 71.5, sealevel : 1016, temperature : 6.9 },
    { month : "Mar", rainfall : 106.49, sealevel : 1015.9, temperature : 9.5 },
    { month : "Apr", rainfall : 129.2, sealevel : 1015.5, temperature : 14.5 },
    { month : "May", rainfall : 144.0, sealevel : 1012.3, temperature : 18.2 },
    { month : "Jun", rainfall : 176.0, sealevel : 1009.5, temperature : 21.5 },
    { month : "Jul", rainfall : 135.6, sealevel : 1009.6, temperature : 25.2 },
    { month : "Aug", rainfall : 148.5, sealevel : 1010.2, temperature : 26.5 },
    { month :  "Sep", rainfall : 216.4, sealevel : 1013.1, temperature : 23.3 },
    { month :  "Oct", rainfall : 194.1, sealevel : 1016.9, temperature : 18.3 },
    { month :  "Nov", rainfall : 95.6, sealevel : 1018.2, temperature : 13.9},
    { month :  "Dec", rainfall : 54.4, sealevel : 1016.7, temperature : 9.6}
];

chart("#chart", {
    padding : {
        right : 120
    },
    axis : [{
        x : {
            domain : "month",
            line : true
        },
        y : {
            type : "range",
            domain: [ 0, 300 ],
            step : 6,
            color : "#7cb5ec",
            format : function(value) {
                return value + " mm";
            }
        },
        data : data
    }, {
        x : {
            hide : true
        },
        y : {
            domain : [ 1008, 1020 ],
            dist : 50,
            color : "#434348",
            format : function(value) {
                return value + " mb";
            },
            orient : "right"
        },
        extend : 0
    }, {
        y : {
            domain: [ 5, 35 ],
            dist : 0,
            color: "#90ed7d",
            format: function (value) {
                return value + " ℃";
            }
        },
        extend : 1
    }],
    brush : [
    	{ type : "column", target : "rainfall", colors : [ "#7cb5ec" ], outerPadding : 5 },
    	{ type : "line", target : "sealevel", axis : 1, colors : [ "#434348" ] , symbol : "curve" },
    	{ type : "line", target : "temperature", axis : 2, colors: [ "#90ed7d" ], symbol : "curve" },
    	{ type : "scatter", target : "temperature", axis : 2, colors: [ "#90ed7d" ], symbol : "triangle", size : 8 }
    ],
    widget : [
    	{ type : "title", text : "Combination Sample" },
    	{ type : "legend", brush : [ 0, 1, 2 ], align : "end" }
    ]
});