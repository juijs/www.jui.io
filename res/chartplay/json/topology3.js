var chart = jui.include("chart.builder");

var data = [
    { key: "1000_1", name: "W1", type: "was", outgoing: [ "1000_2" ] },
    { key: "1000_2", name: "W2", type: "was", outgoing: [ "1000_3", "1000_4" ] },
    { key: "1000_3", name: "W3", type: "was", outgoing: [ "1_2_3_4", "1000_2" ] },
    { key: "1000_4", name: "W4", type: "server", outgoing: [ "1_2_3_4" ] },
    { key: "1_2_3_4", name: "Oracle", type: "db", outgoing: [] }
];

var inner = chart(null, {
    theme: "dark",
    padding: 0,
    width: 200,
    height : 150,
    axis : {
        x : {
            domain : [ "week1", "week2", "week3", "week4" ],
            hide : true
        },
        y :
        {
            type : 'range',
            domain : [ -50, 100 ],
            hide : true
        }
    },
    brush : [
        {
            type : 'column',
            display : "max"
        }
    ],
    style : {
        backgroundColor : "black"
    }
});

chart("#chart", {
    theme: "dark",
    padding: 5,
    axis: {
        c: {
            type: "topologytable"
        },
        data: data
    },
    brush: {
        type: "topologynode",
        colors: [ "black" ],
        nodeText: function(data) {
            if(data.type == "server") {
                return "{server}";
            } else if(data.type == "was") {
                return "{was}";
            } else {
                return "{db}";
            }
        },
        nodeTitle: function(data) {
            return data.name;
        },
        nodeChart: function(data) { // When you double-click the node, occurred
            if(data.name == "Oracle") {
                inner.axis(0).update([
                    { apple : 26.1, ms : 5, oracle : 22.08 },
                    { apple : -13.83, ms : 27.14, oracle : 0.15 },
                    { apple : 3.03, ms : -24, oracle : 6.88 },
                    { apple : 32.95, ms : 29.39, oracle : -2.78 }
                ]);
            } else {
                inner.axis(0).update([
                    { apple : 26.1, ms : 5, oracle : 22.08 },
                    { apple : -43.83, ms : 27.14, oracle : 30.15 },
                    { apple : 55.03, ms : -24, oracle : 36.88 },
                    { apple : 72.95, ms : 25.39, oracle : -32.78 }
                ]);
            }

            return inner;
        }
    },
    widget: {
        type: "topologyctrl",
        zoom: true,
        move: true
    }
});