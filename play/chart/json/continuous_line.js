var chart = jui.include("chart.builder");

chart("#result", {
	axis : [{
		data : [
			{ v1 : 2, v2 : null },
			{ v1 : 5, v2 : null },
			{ v1 : 8, v2 : null },
			{ v1 : null, v2 : 6 },
			{ v1 : null, v2 : null },
			{ v1 : null, v2 : null },
			{ v1 : null, v2 : null },
			{ v1 : null, v2 : 10 }
		],
		x : {
			type : "fullblock",
			domain : [ "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008" ],
			line : true
		},
		y : {
			type : "range",
			domain : function(d) {
				return Math.max(d.v1, d.v2) * 1.5;
			},
			step : 10
		}
	}],
	brush : [{
		type : "line",
		target : "v1",
		symbol : "curve",
		colors : [ 0 ]
	}, {
		type : "scatter",
		target : "v1",
		colors : [ 0 ]
	}, {
		type : "line",
		target : "v2",
		symbol : "curve",
		colors : [ 1 ]
	}, {
		type : "scatter",
		target : "v2",
		colors : [ 1 ]
	}]
});
