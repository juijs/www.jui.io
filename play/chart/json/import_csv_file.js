var chart = jui.include("chart.builder");

chart("#result", {
    axis : {
        x : {
            type : "block",
            domain : "time",
            line : true,
            format : function(value, index) {
                return index;
            }
        },
        y : {
            type : "range",
            domain : function(data) {
                return 1000;
            },
            step : 10,
            line : true
        }
    },
    brush : [{
        type : "line",
        target : []
    }],
    widget : [{
        type : "title",
        text : "Import CSV File"
    }, {
        type : "legend"
    }, {
        type : "tooltip",
        brush : 0
    }, {
        type : "cross",
        xFormat : function(value) {
            return value;
        },
        yFormat : function(value) {
            return Math.ceil(value);
        }
    }]
});
