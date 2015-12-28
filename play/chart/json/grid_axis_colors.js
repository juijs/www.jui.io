var chart = jui.include("chart.builder");

chart("#chart", {
    padding : {
        right : 120
    },
    axis : [{
        x : {
            domain : "month",
            line : true
        },
        y : {
            type : "range",
            domain: [ 0, 300 ],
            step : 6,
            color : "#7cb5ec",
            format : function(value) {
                return value + " mm";
            }
        },
        data : data
    }, {
        x : {
            hide : true
        },
        y : {
            domain : [ 1008, 1020 ],
            dist : 50,
            color : "#434348",
            format : function(value) {
                return value + " mb";
            },
            orient : "right"
        },
        extend : 0
    }, {
        y : {
            domain: [ 5, 35 ],
            dist : 0,
            color: "#90ed7d",
            format: function (value) {
                return value + " ℃";
            }
        },
        extend : 1
    }]
});