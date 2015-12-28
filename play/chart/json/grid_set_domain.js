var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : [{
        x : {
            type : "block",
            domain : [ "2012", "2013", "2014", "2015", "2016", "2017" ]
        },
        y : {
            type : "range",
            domain : [ 0, 100 ],
            step : 5
        },
        data : [
            { value : 50 },
            { value : 60 },
            { value : 70 },
            { value : 80 },
            { value : 90 },
            { value : 100 }
        ]
    }],
    brush : [{
        type : "column",
        outerPadding : 20,
        target : "value"
    }]
});