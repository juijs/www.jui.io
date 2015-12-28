var chart = jui.include("chart.builder");

chart("#chart", {
    padding : 0,
    axis : [{
        map : {
            path : "../../lib/jui/img/map/world-1040x660.svg",
            width : 1040,
            height : 630
        },
        data : [{
            title: "2014",
            value: 2.6
        }, {
            title: "2013",
            value: 2.3
        }]
    }],
    brush : [{
        type : "map.comparebubble",
        size : 150,
        colors : [ "#ffc000", "#fffc00" ],
        format : function(value) {
            return "$" + value + " Billion";
        }
    }],
    widget : [{
        type : "title",
        size : "50px",
        color : "white",
        text : "15.8%",
        dy : 130
    }],
    style : {
        backgroundColor: "#814fd5",
        mapPathBackgroundColor: "rgb(149,107,220)",
        mapPathBorderColor: "#814fd5",
        mapPathBorderWidth: 0.5
    }
});
