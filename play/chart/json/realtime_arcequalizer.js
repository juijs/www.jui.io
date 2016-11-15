var builder = jui.include("chart.builder");

var chart = builder("#result", {
	axis : [{
		c: {
			type: "panel"
		}
	}],
	brush : [{
		type : "arcequalizer",
		target : [ "v1", "v2", "v3" ],
		maxValue: 100,
		stackCount: 20,
		textRadius: 30
	}],
	widget : [{
		type : "title",
		text : "Equalizer Sample"
	}]
});

setTimeout(function() {
	var data = [];

	for(var i = 0; i < 10; i++) {
		data.push({
			v1: Math.floor(Math.random() * 50),
			v2: Math.floor(Math.random() * 20),
			v3: Math.floor(Math.random() * 10)
		});
	}

	chart.axis(0).update(data)
}, 3000);
