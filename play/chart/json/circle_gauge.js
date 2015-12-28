var chart = jui.include("chart.builder");

chart("#chart", {
    axis : {
        data : [{
            value : 50,
            min : 0,
            max : 100
        }]
    },
    brush : {
        type : "circlegauge"
    },
    widget : {
        type : "tooltip"
    }
});
