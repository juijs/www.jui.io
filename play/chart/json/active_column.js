var chart = jui.include("chart.builder");
var data = [
    { quarter : "01", sales : 50 },
    { quarter : "02", sales : 20 },
    { quarter : "03", sales : 10 },
    { quarter : "04", sales : 30 },
    { quarter : "05", sales : 44 },
    { quarter : "06", sales : 22 },
    { quarter : "07", sales : 21 },
    { quarter : "08", sales : 36 },
    { quarter : "09", sales : 56 },
    { quarter : "10", sales : 30 },
    { quarter : "11", sales : 32 },
    { quarter : "12", sales : 25 }
];

chart("#chart", {
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
        data : data
    }],
    brush : [{
        type : "focus",
        start : 4,
        end : 4
    }, {
        type : "column",
        target : "sales",
        display : "max",
        active : 5,
        activeEvent : "mouseover",
        animate : true
    }],
    widget : [{
        type : "title",
        text : "Column Sample"
    }]
});
