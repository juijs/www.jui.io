var chart = jui.include("chart.builder");

chart("#chart", {
    axis : {
        data : [{
            title : "Overall Visits",
            value : 192,
            max : 200,
            min : 0
        }]
    },
    brush : {
        type : "fullgauge",
        startAngle : 0,
        size : 20,
        titleY : 40,
        showText : true,
        format : function(value) {
            return value + "k";
        }
    }
});
