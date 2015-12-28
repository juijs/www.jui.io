var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : {
        x : {
            type : "fullblock",
            domain : [ "Q1", "Q2", "Q3", "Q4" ],
            line : true
        },
        y : {
            type: "range",
            domain : function(d) { return [d.sales, d.profit, d.dept]; },
            step: 10
        },
        data : [
            { sales: 2, profit: 15, dept: 7 },
            { sales: -15, profit: 6, dept: 2 },
            { sales: 8, profit: 10, dept: 5 },
            { sales: 18, profit: 5, dept: 12 }
        ]
    },
	brush : [{
        type : "focus",
        start : 1,
        end : 2
    }, {
		type : "area",
        line : false
	}],
    widget : [{
        type : "title",
        text : "Area Sample"
    }],
    style : {
        areaBackgroundOpacity : 0.5
    }
});
