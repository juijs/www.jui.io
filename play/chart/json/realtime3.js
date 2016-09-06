var builder = jui.include("chart.builder"),
    time = jui.include("util.time"),
    txData = [];

var chart = builder("#result", {
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
            line : true,
			key : "level"
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
        type : "polygon.scatter3d",
        target : [ "delay" ],
        size : 7,
        clip : true,
        colors : function(d) {
            if(d.level == 0) {
                return "#ff0000"
            } else if(d.level == 1) {
                return "#f2ab14";
            }

            return "#4692ca";
        }
    }],
    widget : [{
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

window.interval = setInterval(function() {
    var domain = getDomain();

    appendTxData(txData, domain);
    chart.axis(0).update(txData);
    chart.axis(0).set("x", { domain : domain });
    chart.updateWidget(0, { text: "3D Transaction View (+" + txData.length + ")" });

    chart.render(true);
}, 1000);

function appendTxData(list, domain) {
    var count = Math.floor(Math.random() * 20);

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
                level: 2,
                time: domain[1]
            };

        if(type > 2 && type < 5) {
            data.level = 1;
        } else if(type > 4) {
            data.level = 0;
        }

        list.push(data);
    }
}

function getDomain() {
    return [ new Date() - time.MINUTE * 5, new Date().getTime() ];
}
