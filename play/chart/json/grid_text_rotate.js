var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : [{
        x : {
            type : "block",
            domain : [ "2012", "2013", "2014", "2015", "2016", "2017" ],
            textRotate : -30
        },
        y : {
            type : "range",
            domain : [ 0, 100 ],
            step : 5,
            textRotate : 20,
            line : "dashed rect" // 'solid' or true
        }
    }],
    style : {
        gridTickBorderSize : 7,
        gridTickPadding : 10
    }
});