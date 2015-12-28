var chart = jui.include("chart.builder");
var time = jui.include("util.time");

var data = [
    { quarter : "1Q", sales: 2, profit: 15, total: 17 },
    { quarter : "2Q", sales: 15, profit: 6, total: 21 },
    { quarter : "3Q", sales: 8, profit: 10, total: 18 },
    { quarter : "4Q", sales: 18, profit: 5, total: 23 }
];
var data2 = [
    { name : "Start", value : 90 },
    { name : "a", value : 105 },
    { name : "b", value : 126 },
    { name : "c", value : 89 },
    { name : "d", value : 6 },
    { name : "e", value : -30 },
    { name : "f", value : 16 },
    { name : "g", value : 107 },
    { name : "end", value : 168 }
];

chart("#chart", {
    axis : [{
        x : {
            type : "block",
            domain : "quarter"
        },
        y : {
            type : "range",
            domain : "sales"
        },
        area : {
            x : 0,  y : 0, width : "40%", height : "40%"
        },
        data : data
    }, {
        x : {
            extend : 0
        },
        y : {
            extend : 0,
            domain : "profit"
        },
        area : {
            x : "50%",  y : 0, width : "50%", height : "40%"
        },
        data : data
    }, {
        x : {
            type : "block",
            domain : "name"
        },
        y : {
            type : "range",
            step : 10,
            domain : "value"
        },
        area : {
            x : 0,  y : "50%", width : "100%", height : "50%"
        },
        data : data2
    }],
    brush : [{
        type : "column",
        target : "sales",
        axis : 0
    }, {
        type : "line",
        target : "profit",
        axis : 1
    }, {
        type : "waterfall",
        target : "value",
        end : true,
        line : true,
        outerPadding : 10,
        axis : 2
    }]
});
