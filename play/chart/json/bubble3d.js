var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : {
        x : {
            type : "fullblock",
            domain : [ "Q1", "Q2", "Q3", "Q4" ]
        },
        y : {
            type : "range",
            domain : [ 5, 20 ],
            step : 3
        },
        c : {
            type : "grid3d"
        },
        data : [
            { sales: 12, profit: 10, total: 15 },
            { sales: 15, profit: 6, total: 15 },
            { sales: 8, profit: 10, total: 15 },
            { sales: 18, profit: 5, total: 15 }
        ],
        depth : 150,
        degree : 30
    },
    brush : {
        type : "bubble3d",
        min : 25,
        max : 25,
        clip : false
    },
    widget : [{
        type : "tooltip"
    }, {
        type : "title",
        text : "3D Bubble Sample"
    }]
});
