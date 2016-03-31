var chart = jui.include("chart.builder");

var baseDate = +new Date(1968, 9, 3),
	baseValue = Math.random() * 150,
	oneDay = 24 * 3600 * 1000,
	data = [{
		date: new Date(baseDate),
		value: baseValue
	}];

for (var i = 1; i < 3650; i++) {
	var now = new Date(baseDate += oneDay);
	data.push({
		date: now,
		value: Math.round((Math.random() - 0.498) * 40 + data[i - 1].value)
	});
}

chart("#result", {
	axis : [{
		x : {
			type : "date",
			domain : [ data[0].date, data[data.length - 1].date ],
			interval : oneDay * 365,
			format : "yyyy",
			key : "date",
			line : 'solid'
		},
		y : {
			type : "range",
			domain : "value",
			step : 10,
			line : 'solid'
		},
		data : data
	}],
	brush : [{
		type : "area",
		target : [ "value" ]
	}],
    widget : [{
        type : "title",
        text : "Area Sample"
    }]
});
