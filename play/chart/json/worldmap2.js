var chart = jui.include("chart.builder");

var data = [{
    id: "KR",
    airport: "large"
}, {
    id: "GB",
    airport: "large",
    routes: [ "KR", "IE", "SE", "LT", "PT", "ES", "IT", "UA" ]
}, {
    id: "IE",
    airport: "small"
}, {
    id: "PT",
    airport: "small"
}, {
    id: "ES",
    airport: "small"
}, {
    id: "FR",
    airport: "small"
}, {
    id: "SE",
    airport: "small"
}, {
    id: "UA",
    airport: "small"
}, {
    id: "IT",
    airport: "small"
}, {
    id: "IE",
    airport: "small"
}, {
    id: "NO",
    airport: "small"
}, {
    id: "GR",
    airport: "small"
}, {
    id: "LT",
    airport: "large"
}];

chart("#chart", {
    padding : 0,
    axis : [{
        map : {
            path : "../../lib/jui/img/map/world-1040x660.svg",
            width : 1040,
            height : 630,
            scale : 2.5,
            viewX : -800,
            viewY : -150
        },
        data : data
    }],
    brush : [{
        type : "map.flightroute"
    }],
    widget : [{
        type : "map.control",
        align : "start",
        orient : "top",
        dx : 10,
        dy : 10,
        min : 1,
        max : 3
    }],
    style : {
        mapPathBackgroundColor : "#FFCC00",
        mapPathBackgroundOpacity : 0.4,
        mapControlButtonColor : "#FFCC00"
    }
});
