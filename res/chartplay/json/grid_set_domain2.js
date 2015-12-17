var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : [{
        x : {
            type : "block",
            domain : "year"
        },
        y : {
            type : "range",
            domain : "value",
            step : 5
        },
        data : [
            { year : "2012", value : 50 },
            { year : "2013", value : 60 },
            { year : "2014", value : 70 },
            { year : "2015", value : 80 },
            { year : "2016", value : 90 },
            { year : "2017", value : 100 }
        ]
    }],
    brush : [{
        type : "column",
        outerPadding : 20,
        target : "value"
    }]
});