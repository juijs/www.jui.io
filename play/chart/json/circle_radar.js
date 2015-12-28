var chart = jui.include("chart.builder");
var data = [
    { type : "STR", warrior : 100, wizard : 30, archer : 35 },
    { type : "VIT", warrior : 80, wizard : 50, archer : 70 },
    { type : "DEX", warrior : 50, wizard : 70, archer : 95 },
    { type : "AGI", warrior : 70, wizard : 60, archer : 75 },
    { type : "INT", warrior : 30, wizard : 100, archer : 30 },
    { type : "WIS", warrior : 50, wizard : 90, archer : 40 }
];

chart("#chart", {
    axis : {
        c : {
            type : "radar",
            shape : "circle",
            domain : "type"
        },
        data : data
    },
    brush : {
        type : "path",
        target : [ "warrior", "wizard", "archer" ]
    }
});
