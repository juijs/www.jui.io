var chart = jui.include("chart.builder");

var data = [
	{ date : "2016/01", sales : 10, profit : 3 },
	{ date : "2016/02", sales : 15, profit : 2 },
	{ date : "2016/03", sales : 20, profit : 1 },
	{ date : "2016/04", sales : 40, profit : 4 },
	{ date : "2016/05", sales : 60, profit : 2 },
	{ date : "2016/06", sales : 45, profit : 1 },
	{ date : "2016/07", sales : 30, profit : 2 },
	{ date : "2016/08", sales : 20, profit : 4 },
	{ date : "2016/09", sales : 10, profit : 5 },
	{ date : "2016/10", sales : 10, profit : 6 },
	{ date : "2016/11", sales : 10, profit : 1 },
	{ date : "2016/12", sales : 5, profit : 0 }
];

chart("#result", {
	axis : [{
		x : {
			type : "fullblock",
			domain : "date",
			line : "solid",
			textRotate : -10
		},
		y : {
			type : "range",
			domain : [ 0, 100 ],
			step : 10,
			line : "solid",
			reverse : true,
			color : 0
		},
		data : data
	}, {
		x : {
			type : "fullblock",
			domain : "date",
			hide : true
		},
		y : {
			type : "range",
			domain : [ 0, 20 ],
			step : 5,
			line : "solid",
			orient : "right",
			color : 1
		},
		data : data
	}],
	brush : [{
		type : "area",
		target : [ "sales" ],
		axis : 0
	}, {
		type : "area",
		target : [ "profit" ],
		colors : [ 1 ],
		axis : 1
	}],
    widget : [{
		type : "title",
		text : "Area Sample"
	}]
});
