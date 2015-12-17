var chart = jui.include("chart.builder");

var c = chart("#chart", {
    axis : [{
        x : {
            type : "block",
            domain : "quarter",
            line : true
        },
        y : {
            type : "range",
            domain : [ -40, 40 ],
            step : 10,
            line : true
        },
        data : [
            { quarter : "1Q", sales : 50, profit : 35 },
            { quarter : "2Q", sales : -20, profit : -30 },
            { quarter : "3Q", sales : 10, profit : -5 },
            { quarter : "4Q", sales : 30, profit : 25 }
        ]
    }],
    brush : [{
        type : "column",
        target : [ "sales", "profit" ]
    }],
    render : false
});

// After 5 seconds, update brush
setTimeout(function() {
    c.addBrush({
        type : "line",
        symbol : "curve",
        target : [ "sales", "profit" ]
    });

    c.updateBrush(0, {
        type : "scatter",
        target : [ "sales", "profit" ],
        size : 10
    });

    c.render();
}, 5000);