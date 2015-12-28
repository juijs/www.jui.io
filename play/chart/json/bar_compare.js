var chart = jui.include("chart.builder"),
    theme = jui.include("chart.theme.pastel"),
    height = $("#chart-content").find(".row").height();

var data = [
    { age : "80+",   female : 6.0,  male : 5.3 },
    { age : "75-79", female : 4.7,  male : 4.5 },
    { age : "70-74", female : 9.6,  male : 9.7 },
    { age : "65-69", female : 13.6, male : 12.9 },
    { age : "60-64", female : 19.0, male : 18.7 },
    { age : "55-59", female : 19.7, male : 19.5 },
    { age : "50-54", female : 23.2, male : 25.8 },
    { age : "45-49", female : 30.2, male : 32.1 },
    { age : "40-44", female : 34.9, male : 37.5 },
    { age : "35-39", female : 42.2, male : 42.9 },
    { age : "30-34", female : 43.9, male : 44.7 },
    { age : "25-29", female : 50.1, male : 51.3 },
    { age : "20-24", female : 53.8, male : 57.6 },
    { age : "15-19", female : 56.5, male : 64.0 },
    { age : "10-14", female : 63.3, male : 69.4 },
    { age : "5-9",   female : 60.6, male : 66.3 },
    { age : "5-4",   female : 54.2, male : 58.6 }
];

chart("#chart-left", {
    height: height,
    axis : {
        x : {
            type : "range",
            domain : "female",
            step : 10,
            line : true,
            reverse : true
        },
        y : {
            type : "block",
            domain : "age",
            hide : true
        },
        data : data
    },
    widget : {
        type : "legend"
    },
    brush : {
        type : "bar",
        target : "female",
        colors : [ theme.colors[0] ]
    }
});

chart("#chart-right", {
    height: height,
    axis : {
        x : {
            type : "range",
            domain : "male",
            step : 10,
            line: true
        },
        y : {
            type : "block",
            domain : "age"
        },
        data : data
    },
    widget : {
        type : "legend"
    },
    brush : {
        type : "bar",
        target : "male",
        colors : [ theme.colors[2] ]
    }
});