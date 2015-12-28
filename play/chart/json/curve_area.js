var chart = jui.include("chart.builder");
var data = [
    { sales: 2, profit: 15, dept: 7 },
    { sales: -15, profit: 6, dept: 2 },
    { sales: 8, profit: 10, dept: 5 },
    { sales: 18, profit: 5, dept: 12 }
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
        symbol : "curve"
    }, {
        type : "line",
        symbol : "curve"
    }],
    widget : [{
        type : "title",
        text : "Area Sample"
    }]
});
