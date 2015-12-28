var chart = jui.include("chart.builder");

chart("#chart", {
    padding : 150,
    axis : {
        data : [
            { ie : 70, ff : 11, chrome : 9, safari : 6, other : 4 }
        ]
    },
    brush : {
        type : "donut",
        showText : true,
        "3d" : true
    },
    widget : [
    	{ type : "title", text : "Donut Sample" },
        { type : "tooltip", orient : "left" },
    	{ type : "legend" }
    ]
});
