var chart = jui.include("chart.builder");

chart("#result", {
    axis : {
        x : {
            type : "block",
            domain : "quarter",
            line : true
        },
        y : {
            type : "range",
            domain : [ 0, 50 ],
            step : 10,
            line : true
        },
        data : [
            { quarter : "1Q", sales : 40, profit : 35 },
            { quarter : "2Q", sales : 10, profit : 5 },
            { quarter : "3Q", sales : 15, profit : 10 },
            { quarter : "4Q", sales : 30, profit : 25 }
        ]
    },
    brush : {
        type : "bubble",
        min : 30,
        max : 50,
        target : "sales",
        scaleKey : "profit",
        showText : true,
        format : function(d) {
            return d.profit;
        },
        colors : function(d) {
            if(d.profit > 30) return 2;
            else if(d.profit > 20) return 1;
            return 0;
        }
    }
});
