var builder = jui.include("chart.builder");

// 'type, stime, etime' properties are required!!!
var data = [
    { type: "http://google.co.kr/", stime: 0, etime: 612, kind: "dns" },
    { type: "http://google.co.kr/", stime: 612, etime: 613, kind: "connect" },
    { type: "http://google.co.kr/", stime: 613, etime: 630, kind: "wait" },

    { type: "http://www.google.co.kr/", stime: 630, etime: 640, kind: "dns" },
    { type: "http://www.google.co.kr/", stime: 640, etime: 641, kind: "connect" },
    { type: "http://www.google.co.kr/", stime: 641, etime: 660, kind: "wait" },

    { type: "https://www.google.co.kr/?gws_rd=ssl", stime: 660, etime: 706, kind: "ssl" },
    { type: "https://www.google.co.kr/?gws_rd=ssl", stime: 706, etime: 753, kind: "connect" },
    { type: "https://www.google.co.kr/?gws_rd=ssl", stime: 753, etime: 810, kind: "wait" },
    { type: "https://www.google.co.kr/?gws_rd=ssl", stime: 810, etime: 813, kind: "receive" },

    { type: "nav_logo242.png", stime: 813, etime: 829, kind: "wait" },

    { type: "googlelogo_color_272x92dp.png", stime: 829, etime: 845, kind: "wait" },

    { type: "i1_1967ca6a.png", stime: 845, etime: 856, kind: "ssl" },
    { type: "i1_1967ca6a.png", stime: 856, etime: 869, kind: "connect" },
    { type: "i1_1967ca6a.png", stime: 869, etime: 871, kind: "wait" },

    { type: "rs=ACT90oHKONBv_Rd-Dj71NZEExnlU9sHrEg", stime: 871, etime: 874, kind: "wait" },
    { type: "rs=ACT90oHKONBv_Rd-Dj71NZEExnlU9sHrEg", stime: 874, etime: 878, kind: "receive" },

    { type: "tia.png", stime: 878, etime: 884, kind: "ssl" },
    { type: "tia.png", stime: 884, etime: 891, kind: "connect" },
    { type: "tia.png", stime: 891, etime: 893, kind: "wait" },

    { type: "gen_204?v=3&s=webhp&atyp=csi&ei=nWSbV…", stime: 893, etime: 907, kind: "wait" },

    { type: "rs=AA2YrTvRfEtOu2PtNylQ762iZH-GV07GLw", stime: 907, etime: 909, kind: "wait" },
    { type: "rs=AA2YrTvRfEtOu2PtNylQ762iZH-GV07GLw", stime: 909, etime: 911, kind: "receive" },

    { type: "cb=gapi.loaded_0", stime: 911, etime: 957, kind: "ssl" },
    { type: "cb=gapi.loaded_0", stime: 957, etime: 1004, kind: "connect" },
    { type: "cb=gapi.loaded_0", stime: 1004, etime: 1061, kind: "wait" },
    { type: "cb=gapi.loaded_0", stime: 1061, etime: 1064, kind: "receive" }
];

var chart = builder("#chart", {
    height : 250,
    padding : {
        top : 0,
        bottom : 0,
        left : 300,
        right : 0
    },
    theme : "jennifer",
    axis : {
        x : {
            type : "range",
            domain : "etime",
            step : 10,
            hide : true,
            format : function(d, i) {
                return Math.floor(d);
            }
        },
        y : {
            domain : getDataToDomain(),
            hide : true
        },
        data : data
    },
    brush : [{
        type : "timeline",
        barSize : 7,
        lineWidth : 0,
        target : [ "stime", "etime" ],
        colors : function(d) {
            if(d.kind == "dns") return "#f699c1";
            else if(d.kind == "ssl") return "#9871b5";
            else if(d.kind == "connect") return "#34c2d0";
            else if(d.kind == "send") return "#f4b355";
            else if(d.kind == "wait") return "#fde448";
            else if(d.kind == "receive") return "#8ac730";
        }
    }]
});

function getDataToDomain() {
    var cache = {},
        domain = [ "URL" ];

    for(var i = 0; i < data.length; i++) {
        var type = data[i].type;

        if(!cache[type]) {
            cache[type] = true;
            domain.push(type);
        }
    }

    return domain;
}

console.log(getDataToDomain());