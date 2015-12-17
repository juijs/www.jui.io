var chart = jui.include("chart.builder");

var dataSource = [
    { date: "Apr", value1 : 36, value2 : 42 },
    { date: "May", value1 : 30, value2 : 24 },
    { date: "Jun", value1 : 20, value2 : 28 },
    { date: "Jul", value1 : 41, value2 : 36 },
    { date: "Aug", value1 : 26, value2 : 34 },
    { date: "Sept", value1 : 21, value2 : 28 }
];

var dataSource2 = [
    { mr : "MR 1", value1 : 4470, value2 : 3650 },
    { mr : "MR 2", value1 : 6300, value2 : 4000 },
    { mr : "MR 3", value1 : 4590, value2 : 5150 },
    { mr : "MR 4", value1 : 4500, value2 : 5150 },
    { mr : "MR 5", value1 : 5550, value2 : 3800 },
    { mr : "MR 6", value1 : 6500, value2 : 6100 },
    { mr : "MR 7", value1 : 4775, value2 : 6800 },
    { mr : "MR 8", value1 : 4950, value2 : 4000 },
    { mr : "MR 9", value1 : 4400, value2 : 4030 },
    { mr : "MR 10", value1 : 4100, value2 : 3100 },
    { mr : "MR 11", value1 : 4800, value2 : 2090 },
    { mr : "MR 12", value1 : 5100, value2 : 4100 }
];

chart("#chart", {
    axis : [{
        x : {
            domain : "date",
            color : "red"
        },
        y : {
            type : "range",
            domain: [ 0, 100 ],
            step : 5,
            color : "red"
        },
        data : dataSource
    }, {
        x : {
            domain : "mr",
            color : "green",
            orient : "top"
        },
        y : {
            type : "range",
            domain : [ 0, 8000 ],
            step : 5,
            color : "green",
            orient : "right",
            format : function(d) {
                if(typeof(d) == "number")
                    return (d / 1000) + "K";

                return d;
            }
        },
        data : dataSource2
    }],
    brush : [{
        type : "column",
        target : [ "value1", "value2" ],
        colors : [ "gray", "red" ],
        innerPadding : -20,
        outerPadding : 20
    }, {
        type : "line",
        target : [ "value1", "value2" ],
        axis : 1,
        colors : [ "green", "gray" ],
        symbol : "curve"
    }, {
        type : "scatter",
        target : [ "value1", "value2" ],
        axis : 1,
        colors : [ "green", "gray" ]
    }],
    widget : [{
        type : "title",
        text : "Marketing Report",
        dy : -10
    }, {
        type : "title",
        text : "Number of New Clients Acquired",
        align : "start",
        orient : "center",
        dx : -105,
        dy : -10
    }, {
        type : "title",
        text : "Marketing Dollars Spent",
        align : "end",
        orient : "center",
        dx : 95,
        dy : -10
    }, {
        type : "tooltip",
        format : function(data, k) {
            return {
                key : k,
                value : data[k]
            };
        },
        brush : [ 0, 2 ]
    }],
    style : {
        gridAxisBorderWidth : 2,
        titleFontSize : "11px",
        titleFontWeight : "bold",
        tooltipBorderColor : "#dcdcdc"
    }
});