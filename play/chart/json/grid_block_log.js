var chart = jui.include("chart.builder");
var time = jui.include("util.time");

var data = [
    { quarter : "1Q", sales : 12323000000, profit : 335 },
    { quarter : "2Q", sales : 20042340000, profit : 2 },
    { quarter : "3Q", sales : 1003300, profit : 10022343 },
    { quarter : "4Q", sales : 10322200, profit : 1123213200 }
];

chart("#chart", {
    padding : { left : 100 },
    axis : [{
        x : {
            type : "block",
            domain : "quarter",
            line : true
        },
        y : {
            type : "log",
            domain : function(data) {
                return Math.max(data.sales, data.profit);
            } ,
            step : 10,
            base : 10,
            nice : true,
            line : true
        },
        data : data
    }],
    brush : {
        type : "column",
        target : [ "sales", "profit" ]
    }
});