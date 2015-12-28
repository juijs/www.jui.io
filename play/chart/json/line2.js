var chart = jui.include("chart.builder");
var time = jui.include('util.time');

var stocks = {
    visitor : [ 47, 41, 38, 0, 0, 0, 3, 8, 14, 1, 2, 10, 32, 48 ],
    unique : [ 12, 7, 8, 0, 0, 0, 3, 2, 4, 1, 2, 3, 9, 14 ]
};
var start = new Date("2014/09/03"); // ~2012-12-31
var end = new Date("2014/09/16");

var data = [];
for(var i = 0; i < stocks.visitor.length; i++) {
    data.push({
        date: time.add(start, time.days, i),
        visitor: stocks.visitor[i],
        unique: stocks.unique[i]
    });
}

chart("#chart", {
    axis : [{
        x : {
            type : "date",
            domain : [ start, end ],
            interval : 1000 * 60 * 60 * 24, // 1days
            format : "MM-dd",
            key : "date",
            line : true
        },
        y : {
            type : "range",
            domain : "visitor",
            step : 2,
            color : "#1db34f"
        },
        data : data
    }, {
        x : {
            hide : true
        },
        y : {
            type : "range",
            domain : "unique",
            step : 4,
            color : "#1d7fb3",
            orient : "right"
        },
        extend : 0
    }],
    brush : [{
        type : "line", target : "visitor", colors : [ "#1db34f" ]
    }, {
        type : "line", target : "unique", axis : 1, colors : [ "#1d7fb3" ]
    }, {
        type : "scatter", target : "visitor", colors : [ "#1db34f" ], symbol : "circle", size: 7
    }, {
        type : "scatter", target : "unique", axis : 1, colors : [ "#1d7fb3" ], symbol : "circle", size: 7
    }],
    widget : [
        { type : "title", text : "Line Sample" },
        { type : "legend", brush : [ 0, 1 ] },
        { type : "tooltip", brush : [ 2, 3 ] }
    ]
});
