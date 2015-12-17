var chart = jui.include("chart.builder");

var data = [
    { key: "1000_1", name: "W1", type: "was", outgoing: [ "1000_2" ] },
    { key: "1000_2", name: "W2", type: "was", outgoing: [ "1000_3", "1000_4" ] },
    { key: "1000_3", name: "W3", type: "was", outgoing: [ "1_2_3_4", "1000_2" ] },
    { key: "1000_4", name: "W4", type: "server", outgoing: [ "1_2_3_4" ] },
    { key: "1_2_3_4", name: "Oracle", type: "db", outgoing: [] }
];

chart("#chart", {
    padding: 5,
    axis: {
        c: {
            type: "topologytable"
        },
        data: data
    },
    brush: {
        type: "topologynode",
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
        }
    },
    widget: {
        type: "topologyctrl",
        zoom: true,
        move: true
    }
});