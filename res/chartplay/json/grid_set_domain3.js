var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : [{
        x : {
            type : "block",
            domain : function() {
                return [ "1Q", "2Q", "3Q", "4Q" ]
            }
        },
        y : {
            type : "range",
            domain : function(d) {
                return Math.max(d.sales, d.profit) + 50;
            },
            step : 5
        },
        data : [
            { sales : 50, profit : 35 },
            { sales : 20, profit : 30 },
            { sales : 10, profit : 5 },
            { sales : 30, profit : 25 }
        ]
    }],
    brush : [{
        type : "column",
        outerPadding : 20,
        target : [ "sales", "profit" ]
    }]
});