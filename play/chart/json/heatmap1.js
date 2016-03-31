var chart = jui.include("chart.builder");

var data = [
	{ x: 0, y: 0, value: 100 },
	{ x: 0, y: 1, value: 93 },
	{ x: 0, y: 2, value: 96 },
	{ x: 0, y: 3, value: 100 },
	{ x: 0, y: 4, value: 100 },
	{ x: 0, y: 5, value: 100 },
	{ x: 1, y: 0, value: 85 },
	{ x: 1, y: 1, value: 86 },
	{ x: 1, y: 2, value: 84 },
	{ x: 1, y: 3, value: 86 },
	{ x: 1, y: 4, value: 100 },
	{ x: 1, y: 5, value: 100 },
	{ x: 2, y: 0, value: 77 },
	{ x: 2, y: 1, value: 77 },
	{ x: 2, y: 2, value: 72 },
	{ x: 2, y: 3, value: 82 },
	{ x: 2, y: 4, value: 100 },
	{ x: 2, y: 5, value: 100 },
	{ x: 3, y: 0, value: 74 },
	{ x: 3, y: 1, value: 68 },
	{ x: 3, y: 2, value: 64 },
	{ x: 3, y: 3, value: 72 },
	{ x: 3, y: 4, value: 100 },
	{ x: 4, y: 0, value: 68 },
	{ x: 4, y: 1, value: 62 },
	{ x: 4, y: 2, value: 56 },
	{ x: 4, y: 3, value: 65 },
	{ x: 4, y: 4, value: 100 },
	{ x: 5, y: 0, value: 54 },
	{ x: 5, y: 1, value: 57 },
	{ x: 5, y: 2, value: 52 },
	{ x: 5, y: 3, value: 62 },
	{ x: 5, y: 4, value: 100 },
	{ x: 6, y: 0, value: 48 },
	{ x: 6, y: 1, value: 55 },
	{ x: 6, y: 2, value: 52 },
	{ x: 6, y: 3, value: 55 },
	{ x: 6, y: 4, value: 100 }
];

chart("#result", {
	axis : [
		{
			x : {
				type : "block",
				domain : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
				line : "solid",
				key : "x"
			},
			y : {
				type : "block",
				domain : [ "Oct", "Nov", "Dec", "Jan", "Feb", "Mar" ],
				line : "solid",
				key : "y"

			},
			data : data
		}

	],
	brush : {
		type : "heatmap",
		target : "value",
		colors : function(d) {
			if(d.isLast) return "#aeceeb";
			else {
				if(d.value > 95) return "#588526";
				else if(d.value > 60) return "#8cba00";
				return "#fab913";
			}
		},
		format : function(d) {
			return d.value + "%";
		}
	},
	widget : {
		type : "tooltip"
	}
});
