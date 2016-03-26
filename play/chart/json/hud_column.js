var chart = jui.include("chart.builder");

chart("#chart", {
	axis : [{
		x : {
			type : "block",
			domain : "year",
			hide : true
		},
		y : {
			type : "range",
			domain : [ 0, 10 ],
			hide : true
		},
		data : [
			{ year : "2010", left : 1, right : 0 },
			{ year : "2011", left : 3, right : 7 },
			{ year : "2012", left : 10, right : 2 },
			{ year : "2013", left : 6, right : 4 },
			{ year : "2014", left : 6, right : 3 },
			{ year : "2015", left : 8, right : 3 },
			{ year : "2016", left : 6, right : 8 }
		]
	}],
	brush : [{
		type : "hudcolumn",
		target : [ "left", "right" ]
	}],
	widget : [{
		type : "tooltip",
		all : "all",
		format : function(data, key) {
			return {
				key: (key == "left") ? "LEFT" : "RIGHT",
				value: data[key]
			}
		}
	}],
	style : {
		backgroundColor : "#1c1c1c"
	}
});
