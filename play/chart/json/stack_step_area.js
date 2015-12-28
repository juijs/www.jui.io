var chart = jui.include("chart.builder");
var data = [
    { sales : 2, profit : 6, dept : 7 },
    { sales : 5, profit : 6, dept : 2 },
    { sales : 8, profit : 4, dept : 5 },
    { sales : 10, profit : 5, dept : 12 }
];

chart("#chart-content", {
    axis : {
        x : {
            type : "fullblock",
            domain : [ "Q1", "Q2", "Q3", "Q4" ],
            line : true
        },
        y : {
            type: "range",
            domain: function(data) {
                return data.sales + data.profit + data.dept;
            },
            step: 10
        },
        data : data
    },
    brush : [{
        type : "stackarea",
        symbol : "step"
    }, {
        type : "stackscatter",
        size : 10
    }],
    widget : [{
        type : "title",
        text : "Area Sample"
    }, {
        type : "legend",
        filter : true,
        brush : [ 0, 1 ],
        brushSync : true
    }]
});
