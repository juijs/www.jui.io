var chart = jui.include("chart.builder");

chart("#result", {
    axis : [{
    	c : {
    		type : "panel",
		},
        data : [{
            title : "Overall Visits",
            value : 140,
            max : 200,
            min : 0
        }]
    }],
    brush : [{
        type : "arcgauge",
        size : 10,
        titleY : 50,
        showText : true,
        format : function(value) {
            return value + "k";
        }
    }],
	style : {
    	gaugeFontSize : 40
	}
});
