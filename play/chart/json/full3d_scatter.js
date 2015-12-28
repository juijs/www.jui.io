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
            type : "range",
            domain : [ 0, 100 ],
            line: true,
            step : 4
        },
        data : [
            { sales: 0, profit: 15, total: 20, value: 80 },
            { sales: 15, profit: 6, total: 20, value: 50 },
            { sales: 8, profit: 10, total: 20, value: 60 },
            { sales: 18, profit: 5, total: 20, value: 15 }
        ],
        depth: 300,
        degree: {
            x: 10,
            y: 45,
            z: 0
        },
        perspective: 0.9
    },
    brush : {
        type: "polygon.scatter",
        target : [ "sales", "profit", "total" ],
        size : 10,
        zkey: function(data) {
            return data.value;
        }
    },
    widget : [{
        type : "polygon.rotate"
    }, {
        type : "tooltip"
    }],
    style : {
        gridXAxisBorderWidth: 1,
        gridYAxisBorderWidth: 1,
        gridZAxisBorderWidth: 1
    }
});