var chart = jui.include("chart.builder");
var data = [
    { quarter : "1Q", sales : 2100, profit : 1800 },
    { quarter : "2Q", sales : 6000, profit : 4400 },
    { quarter : "3Q", sales : 8300, profit : 6700 },
    { quarter : "4Q", sales : 5200, profit : 4800 }
];

var c = chart("#chart", {
    axis : [{
        x : {
            type : "block",
            domain : "quarter",
            line : true
        },
        y : {
            type : "range",
            domain : function(d) {
                if(d.sales > 7000) return 10000;
                else if(d.sales > 5000) return 7000;
                else if(d.sales > 3000) return 5000;
                else if(d.sales > 1000) return 3000;
                else if(d.sales > 500) return 1000;

                return 500;
            },
            step : 4,
            line : true
        }
    }],
    brush : [{
        type : "bubble",
        target : [ "sales", "profit" ]
    }]
});

// Data updated after rendering
c.axis(0).update(data);