var chart = jui.include("chart.builder");

chart("#chart", {
    padding: 100,
    axis : {
        x : {
            type : "block",
            domain : [ "Q1", "Q2", "Q3", "Q4" ],
            line : true,
            orient : "bottom"
        },
        y : {
            type : "range",
            domain : "total",
            step : 5,
            line : true,
            orient : "left"
        },
        z : {
            type : "block",
            domain : [ "sales", "profit", "total" ],
            line: true
        },
        data : [
            { sales: 0, profit: 15, total: 20 },
            { sales: 15, profit: 6, total: 20 },
            { sales: 8, profit: 10, total: 20 },
            { sales: 18, profit: 5, total: 20 }
        ],
        depth: 300,
        degree: {
            x: 30,
            y: 20,
            z: 0
        },
        perspective: 0.6
    },
    brush : {
        type: "polygon.column3d",
        target : [ "sales", "profit", "total" ]
    },
    widget : [{
        type : "polygon.rotate3d"
    }, {
        type : "tooltip"
    }],
    style : {
        gridXAxisBorderWidth: 1,
        gridYAxisBorderWidth: 1,
        gridZAxisBorderWidth: 1
    }
});