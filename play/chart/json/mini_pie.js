var chart = jui.include("chart.builder");

chart("#chart", {
    padding : 150,
    axis : {
        c : {
            type : "overlap"
        },
        data : [
            { ie : 70, ff : 11, chrome : 9, safari : 6, other : 4 },
            { ie : 70, ff : 11, chrome : 9, safari : 6, other : 4 },
            { ie : 70, ff : 11, chrome : 9, safari : 6, other : 4 }
        ]
    },
    brush : {
        type : "pie"
    },
    widget : [
        { type : "title", text : "Pie Sample" },
        { type : "tooltip", orient : "left" },
        { type : "legend" }
    ]
});