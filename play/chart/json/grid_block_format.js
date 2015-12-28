var chart = jui.include("chart.builder"),
    data = [];

for(var i = 1; i <= 30; i++) {
    data.push({ date : i, value : Math.floor(Math.random() * 100) + 1 });
}

c = chart("#chart-content", {
    axis : [{
        x : {
            type : "block",
            domain : "date",
            format : function(date, index) {
                if(index % 2 == 0) {
                    return "[" + date + "]";
                }
            }
        },
        y : {
            type : "range",
            domain : [ 0, 100 ],
            step : 5
        },
        data : data
    }],
    brush : [{
        type : "column",
        target : "value"
    }]
});