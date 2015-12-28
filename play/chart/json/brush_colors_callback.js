var chart = jui.include("chart.builder");

chart("#chart", {
    axis : [{
        x : {
            type : "block",
            domain : "quarter",
            line : true
        },
        y : {
            type : "range",
            domain : [ 0, 50 ],
            step : 5,
            line : true
        },
        data : [
            { quarter : "1Q", sales : 50, profit : 35 },
            { quarter : "2Q", sales : 20, profit : 30 },
            { quarter : "3Q", sales : 45, profit : 5 },
            { quarter : "4Q", sales : 30, profit : 25 }
        ]
    }],
    brush : [{
        type : "scatter",
        target : "profit",
        size : 20,

        // Color index of theme or RGB color code
        colors : function(data) {
            if(data.sales > 30) {
                return "#9228E4";
            }

            return 2;
        }
    }]
});