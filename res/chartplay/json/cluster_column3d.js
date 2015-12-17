var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : {
        x : {
            type : "block",
            domain : [ "Q1", "Q2", "Q3", "Q4" ]
        },
        y : {
            type : "range",
            domain : "total"
        },
        c : {
            type : "grid3d"
        },
        data : [
            { sales: 12, profit: 10, total: 20 },
            { sales: 15, profit: 6, total: 20 },
            { sales: 8, profit: 10, total: 20 },
            { sales: 18, profit: 5, total: 20 }
        ],
        depth : 150,
        degree : 30
    },
    brush : {
        type : "clustercolumn3d",
        outerPadding : 25,
        innerPadding : 25
    },
    widget : [{
        type : "tooltip"
    }, {
        type : "title",
        text : "3D Column Sample"
    }]
});
