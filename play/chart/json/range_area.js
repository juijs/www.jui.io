var chart = jui.include("chart.builder");

chart("#result", {
	axis : [{
		data : [
			{ v1 : [4,8], v2 : 6 },
			{ v1 : [5,9], v2 : 7 },
			{ v1 : [6,11], v2 : 8 },
			{ v1 : [5,10], v2 : 6 },
			{ v1 : [2,6], v2 : 3 },
			{ v1 : [5,8], v2 : 6 },
			{ v1 : [2,6], v2 : 4 },
			{ v1 : [8,12], v2 : 10 }
		],
		x : {
			type : "fullblock",
			domain : [ "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008" ],
			line : true
		},
		y : {
			type : "range",
			domain : [ 0, 15 ],
			step : 10
		}
	}],
	brush : [{
		type : "rangearea",
		target : [ "v1" ]
	}, {
		type : "line",
		target : [ "v2" ]
	}]
});
