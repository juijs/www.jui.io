var chart = jui.include("chart.builder");

chart("#result", {
	axis : {
		x : {
			type : "fullblock",
			domain : [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ],
			line : true
		},
		y : {
			type : "range",
			domain : [ 0, 100 ],
			step : 10,
			format : function(value) {
				return value + "%";
			}
		},
		data : [
			{ sales : 60 },
			{ sales : 70 },
			{ sales : 45 },
			{ sales : 90 },
			{ sales : 95 },
			{ sales : 80 },
			{ sales : 60 },
			{ sales : 50 },
			{ sales : 10 },
			{ sales : 99 },
			{ sales : 85 },
			{ sales : 90 }
		]
	},
	brush : [{
		type : "area",
		symbol : "step",
		colors : function(data, i) {
			if(i < 3) return 0; // color index or hex code
			else if(i < 6) return 1;
			else if(i < 9) return 2;
			else return 3;
		}
	}, {
		type : "scatter",
		colors : function(data, i) {
			if(i < 3) return 0; // color index or hex code
			else if(i < 6) return 1;
			else if(i < 9) return 2;
			else return 3;
		}
	}],
	widget : [{
		type : "title",
		text : "Line Sample"
	}, {
		type : "tooltip",
		orient : "right",
		format : function(data, key) {
			return data[key]
		},
		brush : 1
	}],
	style : {
		tooltipBorderColor : "#a9a9a9"
	}
});
