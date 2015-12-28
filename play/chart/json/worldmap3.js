var chart = jui.include("chart.builder");

var data = [{
    id: "US",
    flag: true
}, {
    id: "GB"
}, {
    id: "ES",
    flag: true
}, {
    id: "FR"
}, {
    id: "UA",
    flag: true
}, {
    id: "IT",
    flag: true
}, {
    id: "IE"
}, {
    id: "norway",
    flag: true
}, {
    id: "NO",
    flag: true
}, {
    id: "LT"
}];

chart("#chart", {
    padding : 0,
    axis : [{
        map : {
            path : "../../lib/jui/img/map/world-1040x660.svg",
            width : 1040,
            height : 630
        },
        data : data
    }],
    brush : [{
        type : "map.marker",
        width : 16,
        height : 16,
        html : function(d) {
            if(d.flag) {
                return "<img src='resource/flag.png' width='16' height='16' />";
            }
        },
        svg : function(d) {
            if(d.id == "GB") {
                return "<circle fill='#7977C2' r='6'></circle>"
            }
        }
    }],
    widget : [{
        type : "map.control",
        align : "start",
        orient : "top",
        dx : 10,
        dy : 10,
        min : 1,
        max : 2
    }],
    style : {
        mapPathBackgroundColor : "#15A892",
        mapPathBackgroundOpacity : 0.6,
        mapControlButtonColor : "#15A892"
    }
});
