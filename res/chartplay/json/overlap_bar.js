var chart = jui.include("chart.builder");
var data = [
    { quarter : "1Q", samsung : 300, apple : 450, google : 430, facebook: 350 },
    { quarter : "2Q", samsung : 200, apple : 430, google : 410, facebook: 280 },
    { quarter : "3Q", samsung : 190, apple : 360, google : 380, facebook: 320 },
    { quarter : "4Q", samsung : 260, apple : 470, google : 350, facebook: 340 }
];

chart("#chart-content", {
    axis : {
        x : {
            type : "range",
            step : 10,
            line : true,
            format : function(d) {
                return "$" + d + "B";
            },
            domain : function(d) {
                return 500;
            },
            orient : "top"
        },
        y : {
            type : "block",
            domain : "quarter",
            line : true
        },
        data : data
    },
    brush : {
        type : "bar",
        target : [ "samsung", "apple", "google", "facebook" ],
        innerPadding : -20,
        outerPadding : 20,
        animate : true
    },
    widget : [
        { type : "title", text : "Bar Sample", orient: "bottom", align: "start" },
        { type : "tooltip", orient: "right" },
        { type : "legend", align: "end" }
    ]
});
