var builder = jui.include("chart.builder"),
    time = jui.include("util.time"),
    txData = [];

var chart = builder("#chart", {
    padding : {
        top : 50,
        bottom : 100,
        left : 100,
        right : 100
    },
    axis : [{
        x : {
            type : "date",
            domain : getDomain(),
            interval : 1,
            realtime : "minutes",
            format : "hh:mm",
            key : "time"
        },
        y : {
            type : "range",
            domain : [ 0, 8000 ],
            step : 4,
            line : true,
            orient : "right"
        },
        z : {
            type : "block",
            domain : [ "fatal", "warning", "normal" ],
            line : true
        },
        depth : 200,
        degree : {
            x : 10,
            y : -45,
            z : 0
        },
        perspective : 0.7
    }],
    brush : [{
        type : "polygon.scatter",
        target : [ "delay" ],
        size : 7,
        clip : true,
        zkey : function(d) {
            if(d.level == "fatal") return 0;
            else if(d.level == "warning") return 1;
            return 2;
        },
        colors : function(d) {
            if(d.level == "fatal") {
                return "#ff0000"
            } else if(d.level == "warning") {
                return "#f2ab14";
            }

            return "#4692ca";
        }
    }],
    widget : [{
        type : "polygon.rotate"
    }, {
        type : "title",
        text : "3D Transaction View"
    }],
    style : {
        gridXAxisBorderWidth: 1,
        gridYAxisBorderWidth: 1,
        gridZAxisBorderWidth: 1
    },
    render : false
});

clearInterval(window.interval);
window.interval = setInterval(function() {
    var domain = getDomain();

    appendTxData(txData, domain);
    chart.axis(0).update(txData);
    chart.axis(0).updateGrid("x", { domain : domain });

    chart.render();
}, 1000);

function appendTxData(list, domain) {
    var count = Math.floor(Math.random() * 10);

    for(var i = 0; i < list.length; i++) {
        if(list[i].time < domain[0]){
            list.shift();
        } else {
            break;
        }
    }

    for(var i = 0; i < count; i++) {
        var type = Math.floor(Math.random() * 6),
            data = {
                delay: Math.floor(Math.random() * 10000),
                level: "normal",
                time: domain[1]
            };

        if(type > 2 && type < 5) {
            data.level = "warning";
        } else if(type > 4) {
            data.level = "fatal";
        }

        list.push(data);
    }
}

function getDomain() {
    return [ new Date() - time.MINUTE * 5, new Date().getTime() ];
}