var chart = jui.include("chart.builder");

chart("#chart", {
    padding : {
        top : 100,
        left : 100
        //right : 50,
        //bottom : 50
    },
    axis : [{
        x : {
            type : "block",
            domain : "quarter",
            line : true
        },
        y : {
            type : "range",
            domain : "sales",
            step : 10,
            line : true
        },
        data : [
            { quarter : "1Q", sales : 50 },
            { quarter : "2Q", sales : -20 },
            { quarter : "3Q", sales : 10 },
            { quarter : "4Q", sales : 30 }
        ]
    }],
    brush : [{
        type : "bubble",
        target : "sales"
    }],
    widget : [{
        type : "title",
        text : "Set chart padding",
        orient : "top",
        align : "start"
    }]
});