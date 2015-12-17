var chart = jui.include("chart.builder");
var data = [
    { server : "W1", cpu : 10 },
    { server : "W2", cpu : 2 },
    { server : "W3", cpu : 12 },
    { server : "W4", cpu : 22 },
    { server : "W5", cpu : 15 },
    { server : "W6", cpu : 11 },
    { server : "W7", cpu : 5 },
    { server : "W8", cpu : 3 }
];

chart("#chart", {
    axis : {
        x : {
            type : "block",
            domain : "server",
            line : true
        },
        y : {
            type : "range",
            domain : "cpu",
            step : 10,
            line : true
        },
        data : data
    },
    brush : {
        type : "equalizer",
        target : "cpu",
        innerPadding : 1,
        outerPadding : 3,
        gap : 5,
        unit : 10
    },
    widget : [
        { type : "title", text : "Equalizer Sample" }
    ]
});
