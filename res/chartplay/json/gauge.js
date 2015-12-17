var chart = jui.include("chart.builder");

chart("#chart", {
    brush : {
        type : 'gauge',
        value : 200,
        min : 10,
        max : 700,
        startAngle : -90,
        endAngle : 180,
        arrow : true,
        unitText : "feeds"
    }
});
