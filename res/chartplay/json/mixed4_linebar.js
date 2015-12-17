var chart = jui.include("chart.builder");
var time = jui.include("util.time");

var columnData = [],
    lineData = [];

function generateChartData() {
    var firstDate = new Date();
    firstDate.setTime(firstDate.getTime() - 10 * 24 * 60 * 60 * 1000);

    for (var i = firstDate.getTime(); i < (firstDate.getTime() + 10 * 24 * 60 * 60 * 1000); i += 60 * 60 * 1000) {
        var newDate = new Date(i);

        if (i == firstDate.getTime()) {
            var value1 = Math.round(Math.random() * 10) + 1;
        }
        else {
            var value1 = Math.round(lineData[lineData.length - 1].value / 100 * (90 + Math.round(Math.random() * 20)) * 100) / 100;
        }

        if (newDate.getHours() == 12) {
            // we set daily data on 12th hour only
            var value2 = Math.round(Math.random() * 12) + 1;
            columnData.push({
                date: newDate,
                value: value2
            });
        }
        else {
            lineData.push({
                date: newDate,
                value: value1
            });
        }
    }
}

generateChartData();

chart("#chart", {
    axis : [{
        x : {
            type : "block",
            domain : "date",
            hide : true
        },
        y : {
            type : "range",
            domain : function(d) {
                return d.value + 10;
            },
            step : 5
        },
        data : columnData
    },
    {
        x : {
            type : "date",
            domain : [ lineData[0].date, lineData[lineData.length - 1].date ],
            interval : 1000 * 60 * 60 * 24, // 1day
            format : "MM-dd",
            textRotate : -20,
            key : "date",
            hide : false
        },
        y : {
            hide : true
        },
        data : lineData,
        extend : 0
    }],
    brush : [{
        type : "column",
        target : "value",
        axis : 0
    }, {
        type : "line",
        target : "value",
        axis : 1,
        colors : [ 2 ]
    }]
});
