var chart = jui.include("chart.builder");

chart("#chart", {
    axis : {
        x : {
            type : "block",
            domain : [ "Q1", "Q2", "Q3", "Q4" ],
            line : true
        },
        y : {
            type : "range",
            domain : "total",
            step : 10
        },
        data : [
            { sales : 2, profit : 15, total : 20 },
            { sales : 15, profit : 6, total : 20 },
            { sales : 8, profit : 10, total : 20 },
            { sales : 18, profit : 5, total : 20 }
        ]
    },
    brush : {
        type : "scatter",
        symbol : function(k, v) {
            if(k == "sales") return "circle";
            else if(k =="profit") return "rectangle";
            return "triangle";
        },
        size: 10
    },
    widget : [
        { type : "title", text : "Scatter Sample"},
        { type : "tooltip" }
    ]
});