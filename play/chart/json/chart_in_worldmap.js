var chart = jui.include("chart.builder");

var data = [{
    id: "KR",
    value: 30
}, {
    id: "JP",
    value: 70
}, {
    id: "TH",
    value: 10
}, {
    id: "PL",
    value: 20
}, {
    id: "AT",
    value: 30
}, {
    id: "CH",
    value: 10
}, {
    id: "US",
    value: 40
}];

chart("#chart", {
    padding : {
        top : 0,
        bottom : 0
    },
    axis : [{
        map : {
            path :  "../../lib/jui/img/map/world-1040x660.svg",
            width : 1040,
            height : 660
        },
        data : data
    }, {
        x : {
            type : "block",
            domain : "year",
            line : false
        },
        y : {
            type : "range",
            domain : [ 0, 1000 ],
            step : 5,
            line : true
        },
        area : {
            y : "70%",
            height : "25%"
        },
        data : [
            { year : "2008", sales : 300 },
            { year : "2009", sales : 375 },
            { year : "2010", sales : 500 },
            { year : "2011", sales : 550 },
            { year : "2012", sales : 575 },
            { year : "2013", sales : 700 },
            { year : "2014", sales : 1000 }
        ]
    }],
    brush : [{
        type : "map.bubble",
        colors : [ "rgb(129,79,213)" ],
        showText : true,
        min : 15,
        max : 50
    }, {
        type : "column",
        target : "sales",
        size : 20,
        axis : 1,
        display : "all",
        clip : false,
        colors : function(d) {
            if(d.sales < 1000) {
                return "#555d69";
            }

            return "#fff000";
        }
    }],
    style: {
        backgroundColor : "#1abc9c",
        gridFontColor : "rgba(255,255,255,0.9)",
        gridYFontColor : "white",
        gridXFontColor : "black",
        gridXFontWeight : "bold",
        gridBorderColor : "#b8e5de",
        gridYAxisBorderWidth : 0,
        gridXAxisBorderWidth : 1,
        gridXAxisBorderColor : "white",
        gridTickBorderSize : 0,
        gridTickPadding : 10,
        tooltipPointRadius : 0,
        tooltipPointBorderWidth : 0,
        mapPathBackgroundColor : "rgb(170,223,215)",
        mapPathBorderColor : "#1abc9c"
    }
});