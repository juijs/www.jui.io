var chart = jui.include("chart.builder");

var c = chart("#chart", {
    axis : {
        x : {
            type : "block",
            domain : [ "1Q", "2Q", "3Q", "4Q" ],
            line : true
        },
        y : {
            type : "range",
            domain : [ 0, 10000 ],
            step : 4
        },
        data : [
            { sales : 2100, profit : 1800 },
            { sales : 6000, profit : 4400 },
            { sales : 8300, profit : 6700 },
            { sales : 5200, profit : 4800 }
        ]
    },
    brush : {
        type: "scatter",
        target: [ "sales", "profit" ]
    },
    render : false
});

// After 5 seconds, update axis grid
setTimeout(function() {
    var axis = c.axis(0);

    axis.updateGrid("y", {
        type : "block",
        domain : [ "1Q", "2Q", "3Q", "4Q" ],
        line : true
    }, true);

    axis.updateGrid("x", {
        type : "range",
        domain : [ 0, 10000 ],
        step : 4
    }, true);

    c.render();
}, 5000);