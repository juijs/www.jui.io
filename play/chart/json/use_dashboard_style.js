var chart = jui.include("chart.builder"),
    data1 = [
        { sales: 2, profit: 15, dept: 7 },
        { sales: -15, profit: 6, dept: 2 },
        { sales: 8, profit: 10, dept: 5 },
        { sales: 18, profit: 5, dept: 12 }
    ],
    data2 = [
        { ie : 70, ff : 11, chrome : 9, safari : 6, other : 4 }
    ],
    data3 = [
        { title : "Overall Visits", value : 192, max : 200, min : 0 }
    ];

chart("#chart", {
    padding : 10,
    axis : [{
        x : {
            type : "fullblock",
            domain : [ "Q1", "Q2", "Q3", "Q4" ],
            line : true
        },
        y : {
            type: "range",
            domain : function(d) {
                return Math.max(d.sales, d.profit, d.dept);
            },
            step: 10
        },
        padding : {
            left : 50,
            top : 50,
            right : 20,
            bottom : 25
        },
        area : {
            width : "45%",
            height : "45%"
        },
        data : data1
    }, {
        extend : 0,
        area : {
            x : "50%"
        },
        data : data1
    }, {
        padding : {
            top : 100,
            left : 70,
            right : 50,
            bottom : 50
        },
        area : {
            width : "45%",
            height : "50%",
            y : "50%"
        },
        data : data2
    }, {
        extend : 2,
        padding : {
            top : 70,
            left : 30,
            right : 30,
            bottom : 30
        },
        area : {
            x : "50%"
        },
        data : data3
    }],
    brush : [{
        type : "area",
        target : [ "sales", "profit" ],
        axis : 0
    }, {
        type : "scatter",
        symbol : "triangle",
        target : [ "dept" ],
        colors : [ 2 ],
        size : 10,
        axis : 1
    }, {
        type : "pie",
        axis : 2,
        showText : true
    }, {
        type : "fullgauge",
        startAngle : 0,
        size : 20,
        titleY : 40,
        showText : true,
        format : function(value) {
            return value + "k";
        },
        axis : 3
    }],
    widget : [{
        type : "title",
        text : "Area Chart",
        axis : 0
    }, {
        type : "title",
        text : "Scatter Chart",
        axis : 1
    }, {
        type : "title",
        text : "Pie Chart",
        axis : 2
    }, {
        type : "title",
        text : "Gauge Chart",
        axis : 3
    }],
    style : {
        axisBorderColor : "#dcdcdc",
        axisBorderWidth : 1.5,
        axisBorderRadius : 5,
        titleFontSize : 12,
        titleFontWeight : 700
    }
});
