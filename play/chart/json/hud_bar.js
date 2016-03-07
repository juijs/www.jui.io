var chart = jui.include("chart.builder");

chart("#chart", {
	padding : {
		left : 150,
		right : 100
	},
	axis : [{
		x : {
			type : "range",
			domain : [ 0, 10 ],
			hide : true
		},
		y : {
			type : "block",
			domain : "quarter",
			hide : true
		},
		data : [
			{ quarter : "1Q", top : 1, bottom : 1 },
			{ quarter : "2Q", top : 3, bottom : 7 },
			{ quarter : "3Q", top : 10, bottom : 2 },
			{ quarter : "4Q", top : 6, bottom : 4 }
		]
	}],
	brush : [{
		type : "hudbar",
		target : [ "top", "bottom" ],
		format : function(value, key) {
			return ((key == "top") ? "T" : "B") + " " + value;
		}
	}],
	widget : [{
		type : "tooltip",
		all : "all",
		format : function(data, key) {
			return {
				key: (key == "top") ? "TOP" : "BOTTOM",
				value: data[key]
			}
		}
	}]
});
