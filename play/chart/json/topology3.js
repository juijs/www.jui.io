var chart = jui.include("chart.builder");

var nodeData = [
    { key: "1000_1", name: "W1", type: "was", outgoing: [ "1000_2" ] },
    { key: "1000_2", name: "W2", type: "was", outgoing: [ "1000_3", "1000_4" ] },
    { key: "1000_3", name: "W3", type: "was", outgoing: [ "1_2_3_4", "1000_2" ] },
    { key: "1000_4", name: "W4", type: "server", outgoing: [ "1_2_3_4" ] },
    { key: "1_2_3_4", name: "Oracle", type: "db", outgoing: [] }
];

var edgeData = [
	{ key: "1000_1:1000_2", count: 3, time: 1000 },
	{ key: "1000_2:1000_3", count: 3, time: 1000 },
	{ key: "1000_2:1000_4", count: 3, time: 1000 },
	{ key: "1000_3:1_2_3_4", count: 3, time: 2000 },
	{ key: "1000_3:1000_2", count: 3, time: 2000 },
	{ key: "1000_4:1_2_3_4", count: 3, time: 2000 }
];

chart("#chart", {
    theme: "dark",
    padding: 5,
    axis: {
        c: {
            type: "topologytable",
			sort: "random"
        },
        data: nodeData
    },
    brush: {
        type: "topologynode",
        nodeText: function(data) {
			if(data.outgoing.length > 1) {
				if (data.type == "server") {
					return "{server}";
				} else if (data.type == "was") {
					return "{was}";
				} else {
					return "{db}";
				}
			}

			return "";
        },
        nodeTitle: function(data) {
            return data.name;
        },
		nodeScale: function(data) {
			if(data.outgoing.length > 1) {
				return 1;
			}

			return 0.5;
		},
		edgeData: edgeData,
		edgeText: function(data, align) {
			var text = data.time + "/" + data.count;

			if(align == "end") {
				text = text + " →";
			} else {
				text = "← " + text;
			}

			return text;
		},
		edgeOpacity: function(data) {
			if(data.time > 1000) {
				return 1;
			}

			return 0.75;
		},
		tooltipTitle: function(data, align) {
			if(align == "start") {
				return data.reverse().join(" ← ");
			}

			return data.join(" → ");
		},
		tooltipText: function(data) {
			return "Total Response Time (Count) : " + data.time + " (" + data.count + ")";
		}
    },
    widget: {
        type: "topologyctrl",
        zoom: true,
        move: true
    }
});
