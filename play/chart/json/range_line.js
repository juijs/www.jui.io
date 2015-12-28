var chart = jui.include("chart.builder");
var time = jui.include('util.time');

var stocks = {
    apple : [ 72.95, 80.23, 81.23, 91.03, 90.77, 82.98, 79.35, 78.5, 79.34, 81.46, 73.7, 62.02, 55.03, 51.93, 55, 51.81, 52.29, 53.05, 45.61, 47.26, 47.57, 47.35, 47.99, 46.1, 43.83, 42.28, 40.89, 38.55, 33.03, 34.95, 34.18, 34.9, 35.47, 31.93, 27.8, 26.1 ].reverse(),
    microsoft : [ 25.39,25.31,26.91,28.06,29.06,27.61,28.66,27.34,29.8,30.02,29.54,27.3,24,23.65,24.44,22.84,24.41,24.99,23.71,22.81,23.48,23,24.08,24.97,25.14,22.75,23.87,21.92,21.01,22.98,20.49,22.97,27.07,25.96,25.41,24.86 ].reverse(),
    oracle : [ 32.78,31.48,30.4,30.71,30.9,29.48,28.93,25.79,28.64,28.35,28.44,27.43,24.88,30.41,31.79,27.82,27.18,29.61,31.81,33.07,34.75,32.25,31.74,30.9,30.15,26.05,28.3,25.81,21,22.73,20.59,21.65,24.82,24.62,23.6,22.08 ].reverse()
};
var start = new Date("2010/01/01"); // ~2012-12-31
var end = new Date("2012/12/31");

var data = [];
for(var i = 0; i < stocks.apple.length; i++) {
    data.push({
        date : time.add(start, time.months, i),
        apple : stocks.apple[i],
        microsoft : stocks.microsoft[i],
        oracle : stocks.oracle[i]
    });
}

chart("#chart", {
	axis : [{
		x : {
			type : "date",
			domain : [ start, end ],
			interval : 1000 * 60 * 60 * 24 * 365, // 1years
			format : "yyyy",
		    key: "date"
		},
		y : { 
			type : "range",
			domain : function(d) {
				return Math.max(d.apple, d.microsoft, d.oracle);
			},
			step : 10,
			line : true 
		},
		data : data
	}],
	brush : [{
		type : "line",
		target : [ "apple", "microsoft", "oracle" ],
		animate : true
	}],
    widget : [{
		type : "title",
		text : "Line Sample"
	}, {
		type : "legend",
		filter : true
	}]
});
