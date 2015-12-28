var chart = jui.include("chart.builder");
var data = [
    { quarter : "1Q", sales : 50, profit : 35 },
    { quarter : "2Q", sales : -20, profit : -30 },
    { quarter : "3Q", sales : 10, profit : -5 },
    { quarter : "4Q", sales : 30, profit : 25 }
];

chart("#chart", {
    width : 100,
    height : 50,
    padding : "empty",
    axis : {
        x : {
            type : "block",
            domain : "quarter",
            line : true,
            hide : true
        },
        y : {
            type : "range",
            domain : "sales",
            step : 10,
            hide : true
        },
        data : data
    },
    brush : {
        type : "column",
        target : [ "sales", "profit" ]
    }
});
