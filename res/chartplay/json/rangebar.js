var chart = jui.include("chart.builder");
var data = [
    { quarter : "1Q", sales : [10,50], profit : [10,35] },
    { quarter : "2Q", sales : [-20,5], profit : [-30,7] },
    { quarter : "3Q", sales : [10,30], profit : [0,30] },
    { quarter : "4Q", sales : [35,70], profit : [30,60] }
];

chart("#chart-content", {
    axis : {
        x : {
            type : "range",
            domain : [ -40, 80 ],
            step : 10,
      		line : true 
        },
        y : {
            type : "block",
            domain : "quarter",
            line : true
        },
        data : data
    },
    brush : {
        type : "rangebar",
        target : [ "sales", "profit" ],
        outerPadding : 20
    },
    widget : [
        { type : "title", text : "Bar Sample" },
        { type : "tooltip", orient: "right" },
        { type : "legend" }
    ]
});