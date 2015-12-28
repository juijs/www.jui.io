var chart = jui.include("chart.builder");
var time = jui.include("util.time");

chart("#chart", {
    axis : {
        x : {
            type : "dateblock",
            domain : [ new Date("2015/01/01"), new Date("2015/01/02") ],
            interval : 1000 * 60 * 60 * 6, // 6hours
            format : "MM/dd HH:mm",
            line : true
        },
        y : {
            type : "range",
            domain : [ 0, 50 ],
            step : 5,
            line : true,
            orient : "right"
        },
        data : [
            { sales : 50, profit : 35 },
            { sales : 20, profit : 30 },
            { sales : 10, profit : 5 },
            { sales : 30, profit : 25 },
            { sales : 25, profit : 20 }
        ]
    },
    brush : {
        type : "line",
        target : [ "sales", "profit" ]
    }
});