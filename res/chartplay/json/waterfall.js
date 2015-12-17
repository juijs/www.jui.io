var chart = jui.include("chart.builder");
var data = [
    { name : "Start", value : 90 },
    { name : "a", value : 105 },
    { name : "b", value : 126 },
    { name : "c", value : 89 },
    { name : "d", value : 6 },
    { name : "e", value : -30 },
    { name : "f", value : 16 },
    { name : "g", value : 107 },
    { name : "end", value : 168 }
];

chart("#chart", {
    axis : {
        x : {
            type : "block",
            domain: "name"
        },
        y : {
            type : "range",
            step : 10,
            domain : "value"
        },
        data : data
    },
    brush : {
        type : "waterfall",
        target : "value",
        end : true,
        line : true,
        outerPadding : 10
    },
    widget : {
        type : "tooltip"
    }
});