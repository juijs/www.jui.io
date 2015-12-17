var chart = jui.include("chart.builder");
var data = [
    { sales : 4, profit : 2, dept : 0 },
    { sales : 5, profit : 3, dept : 2 },
    { sales : 8, profit : 4, dept : 3 },
    { sales : 10, profit : 7, dept : 6 }
];

chart("#chart-content", {
    axis : {
        x : {
            type : "block",
            domain : [ "Q1", "Q2", "Q3", "Q4" ],
            full : true,
            line : true
        },
        y : {
            type: "range",
            domain : function(d) { return [d.sales, d.profit, d.dept]; },
            step: 10
        },
        data : data
    },
    brush : [{
        type : "area",
        symbol : "step"
    }, {
        type : "line",
        symbol : "step"
    }],
    widget : [{
        type : "title",
        text : "Area Sample"
    }]
});
