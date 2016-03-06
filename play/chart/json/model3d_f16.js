var chart = jui.include("chart.builder");

chart("#chart", {
	padding: 100,
	axis : {
		x : {
			type : "range",
			domain : [ -5, 20 ],
			line : "solid"
		},
		y : {
			type : "range",
			domain : [ -3, 5 ],
			hide : true
		},
		z : {
			type : "range",
			domain : [ -7, 7 ],
			line : "solid"
		},
		depth : 400,
		perspective : 0.8
	},
	brush : [{
		type : "canvas.model3d",
		model : "f16"
	}],
	widget : [{
		type : "polygon.rotate3d"
	}],
	style : {
		gridXAxisBorderWidth: 1,
		gridYAxisBorderWidth: 1,
		gridZAxisBorderWidth: 1
	},
	canvas : true
});
