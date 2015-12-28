var chart = jui.include("chart.builder");

chart("#chart", {
    axis : [{
        data : [
            { quarter : "01", sales : 50 },
            { quarter : "02", sales : 20 },
            { quarter : "03", sales : 0 },
            { quarter : "04", sales : 30 },
            { quarter : "05", sales : 44 },
            { quarter : "06", sales : 22 },
            { quarter : "07", sales : 21 },
            { quarter : "08", sales : 36 },
            { quarter : "09", sales : 56 },
            { quarter : "10", sales : 30 },
            { quarter : "11", sales : 50 },
            { quarter : "12", sales : 25 }
        ],
        x : {
            type : "range",
            domain : [ 0, 100 ],
            step : 10,
            line : true
        },
        y : {
            type : "block",
            domain : "quarter",
            line : true
        }
    }],
    brush : {
        type : "imagebar",
        target : "sales",
        width : 80,
        height : 40,
        fixed : false,
        uri : "resource/man.svg"
    },
    widget : {
        type : "title",
        text : "Image Bar Sample",
        align : "start"
    }
});
