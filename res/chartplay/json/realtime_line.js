var chart = jui.include("chartx.realtime");
var time = jui.include("util.time");

var c = chart("#chart", {
    axis : {
        data : getRealtimeData(5)
    },
    brush : {
        type : "line",
        target : [ "s1", "s2", "s3" ]
    },
    widget : [{
        type : "title",
        text : "Realtime Sample"
    }, {
        type : "legend"
    }, {
        type : "cross",
        xFormat : function(d) {
            return time.format(d, "hh:mm:ss");
        },
        yFormat : function(d) {
            return Math.round(d);
        }
    }, {
        type : "tooltip"
    }]
});

function getRealtimeRowData(time) {
    var sin = Math.sin(realtimeIndex / 10);

    return {
        time : time,
        s1 : sin - 4,
        s2 : sin * 2.5,
        s3 : sin + 5
    }
}

runRealtimeData(c);