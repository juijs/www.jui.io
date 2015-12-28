var chart = jui.include("chart.builder");
var data = [
    { quarter : "1Q", sales : [0,20], profit : [0,30] },
    { quarter : "2Q", sales : [10,40], profit : [5,35] },
    { quarter : "3Q", sales : [20,35], profit : [25,70] },
    { quarter : "4Q", sales : [60,80], profit : [50,95] }
];

chart("#chart", {
    axis : {
        x : {
            type : "block",
            domain : "quarter",
            line : true
        },
        y : {
            type : "range",
            domain : [ 0, 100 ],
            step : 10,
            line : true,
            orient : "right"
        },
        data : data
    },
    brush : {
        type : "rangecolumn",
        target : [ "sales", "profit" ],
        outerPadding : 20
    },
    widget : [
    	{ type : "title", text : "Column Sample" },
        { type : "tooltip" },
    	{ type : "legend" }
    ]
});
