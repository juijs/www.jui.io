var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : {
        x : {
            type : "range",
            domain : [ -40, 60 ],
            step : 10,
            line : "solid"
        },
        y : {
            type : "block",
            domain : "quarter",
            line : true // 'solid' or true
        },
        data : [
            { quarter : "1Q", sales : 50, profit : 35 },
            { quarter : "2Q", sales : -20, profit : -30 },
            { quarter : "3Q", sales : 10, profit : -5 },
            { quarter : "4Q", sales : 30, profit : 25 }
        ]
    },
    style : {
        gridTickSize : 7,
        gridTickPadding : 10
    }
});