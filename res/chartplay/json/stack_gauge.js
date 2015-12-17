var chart = jui.include("chart.builder");

chart("#chart", {
    axis : {
        data : [
            { title : "OPTION 1", value : 75 },
            { title : "OPTION 2", value : 68 },
            { title : "OPTION 3", value : 60 },
            { title : "OPTION 4", value : 70 },
            { title : "OPTION 5", value : 20 },
            { title : "OPTION 6", value : 20 }
        ]
    },
    brush : [{
        type : "stackgauge",
        target : "value",
        size : 18
    }]
});