var chart = jui.include("chart.builder"),
    time = jui.include("util.time");

var start = new Date(),
    end = time.add(start, time.hours, 5),
    data = getRandomData();

chart("#chart", {
    axis : {
        x : {
            type : "date",  // default type is block
            domain : [ start, end ],
            interval : 1000 * 60 * 60, // 1hours
            format : "hh:00",
            key: "date",
            line : true
        },
        y : {
            type : "range",
            domain : function(d) { 
                return Math.max(d.q1, d.q2, d.q3);
            },
            step : 10,
            line : true
        },
        data : data,
        buffer : data.length
    },
    brush : [{
        type : "scatterpath",
        target : "q1",
        symbol : "circle",
        colors : [ 0 ],
        size : 3
    }, {
        type : "scatterpath",   
        target : "q2",
        symbol : "triangle",
        colors : [ 1 ],
        size : 3
    }, {
        type : "scatterpath",
        target : "q3",
        symbol : "rectangle",
        colors : [ 2 ],
        size : 3
    }]
});

function getRandomData() {
    var data = [];

    for(var i = 0; i < 60 * 60 * 5; i++) {
        if(i % 10 == 0) {
            data.push({
                date: time.add(start, time.seconds, i),
                q1: getNumber(),
                q2: getNumber(),
                q3: getNumber()
            });
        }
    }

    function getNumber() {
        return Math.floor(Math.random() * 1000) + 1;
    }

    return data;
}