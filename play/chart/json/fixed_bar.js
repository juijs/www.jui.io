var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : {
        x : {
            type : "range",
            domain : [ -40, 60 ],
            step : 10,
            line : true
        },
        y : {
            type : "block",
            domain : "quarter",
            line : true 
        },
        data : [
            { quarter : "1Q", sales : 50, profit : 35 },
            { quarter : "2Q", sales : -20, profit : -30 },
            { quarter : "3Q", sales : 10, profit : -5 },
            { quarter : "4Q", sales : 30, profit : 25 }
        ]
    },
    brush : {
        type : "bar",
        size : 30,
        target : [ "sales", "profit"]
    },
    widget : [
        { type : "title", text : "Bar Sample" },
        { type : "tooltip", orient: "right" },
        { type : "legend" }
    ]
});