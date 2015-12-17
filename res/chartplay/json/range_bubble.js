var chart = jui.include("chart.builder");
var time = jui.include("util.time");

function getNumber() {
	return Math.round(Math.random() * 30 % 20);
}

var start = new Date(), end = time.add(start, time.hours, 5), data = [];

for (var i = 0; i < 30; i++) {
	data.push({
		time : time.add(start, time.minutes, i * 10),
		v1 : getNumber(),
		v2 : getNumber(),
		v3 : getNumber(),
		v4 : getNumber(),
		v5 : getNumber()
	});
}

chart("#chart", {
	axis : {
		x : {
			type : "date",
			domain : [start, end],
			interval : 1000 * 60 * 60, // 1hours
			format : "hh:mm",
			key : "time",
			line : true
		},
		y : {
			type : "range",
			domain : "v1",
			step : 10,
			line : true
		},
		data : data
	},
	brush : {
		type : "bubble",
		min : 1,
		max : 50,
		target : [ "v1", "v2", "v3", "v4", "v5" ],
		animate : true
	},
    widget : [
        {
			type : "title",
			text : "Bubble Sample"
		}, {
			type : "legend"
		}, {
			type : "cross",
            xFormat : function(d) {
				return time.format(d, "hh:mm");
            },
			yFormat : function(d) {
				return Math.round(d);
			}
        }, {
			type : "tooltip"
		}
    ]
});
