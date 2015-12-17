var chart = jui.include("chart.builder");
var data = [
    { quarter : "1Q", samsung : 50, lg : 35, sony: 10 },
    { quarter : "2Q", samsung : 20, lg : 30, sony: 5 },
    { quarter : "3Q", samsung : 20, lg : 5, sony: 10 },
    { quarter : "4Q", samsung : 30, lg : 25, sony: 15 }
];

chart("#chart", {
    series : {
        samsung : {
            color : 0,
            text : "Samsung"
        },
        lg : {
            color : 1,
            text : "LG"
        },
        sony : {
            color : 2,
            text : "SONY"
        }
    },
    axis : {
        x : {
            type : "range",
            domain : function(data) {
                return data.samsung + data.lg + data.sony;
            },
            step : 10,
            line : true
        },
        y : {
            type : "block",
            domain : "quarter",
            line : true
        },
        data : data
    },
    brush : {
        type : "stackbar",
        target : [ "samsung", "lg", "sony" ]
    },
    widget : [
        { type : "title", text : "Bar Sample" },
        { type : "legend", filter : true }
    ]
});