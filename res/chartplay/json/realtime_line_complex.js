var chart = jui.include("chartx.realtime");
var time = jui.include('util.time');

var c = chart("#chart", {
    axis : {
        domain: function(d) {
            return d.s20 * 2;
        },
        data : getRealtimeData(5)
    },
    brush : {
        type : "line",
        target : [
            "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10",
            "s11", "s12", "s13", "s14", "s15", "s16", "s17", "s18", "s19", "s20"
        ]
    },
    widget : [{
        type : "title",
        text : "Realtime Sample"
    }, {
        type : "tooltip"
    }]
});

function getRealtimeRowData(time) {
    var sin = Math.sin(realtimeIndex / 15);

    return {
        time : time,
        s1 : sin * 1.1,
        s2 : sin * 1.2,
        s3 : sin * 1.3,
        s4 : sin * 1.4,
        s5 : sin * 1.5,
        s6 : sin * 1.2,
        s7 : sin * 1.3,
        s8 : sin * 1.4,
        s9 : sin * 1.5,
        s10 : sin * 1.6,
        s11 : sin * 1.3,
        s12 : sin * 1.4,
        s13 : sin * 1.5,
        s14 : sin * 1.6,
        s15 : sin * 1.7,
        s16 : sin * 1.4,
        s17 : sin * 1.5,
        s18 : sin * 1.6,
        s19 : sin * 1.7,
        s20 : sin * 1.8
    }
}

runRealtimeData(c);