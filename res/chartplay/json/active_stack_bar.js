var chart = jui.include("chart.builder");
var activeIndex = 0,
    data = [
        { quarter : "1Q", samsung : 50, lg : 35, sony: 10 },
        { quarter : "2Q", samsung : 20, lg : 30, sony: 5 },
        { quarter : "3Q", samsung : 20, lg : 5, sony: 10 },
        { quarter : "4Q", samsung : 30, lg : 25, sony: 15 }
    ];

chart("#chart", {
    axis : {
        x : {
            type : "range",
            domain : function(data) {
                return data.samsung + data.lg + data.sony;
            },
            line : true,
            orient: "top"
        },
        y : {
            type : "block",
            domain : "quarter",
            line : true
        },
        data : data
    },
    brush : {
        type : "stackbar",
        active : activeIndex,
        activeEvent : "click",
        target : [ "samsung", "lg", "sony" ]
    },
    widget : [{
        type : "title",
        text : "Bar Sample",
        orient : "bottom",
        align : "end"
    }, {
        type : "legend",
        filter : true
    }],
    event : {
        "mousedown" : function(d) {
            activeIndex = d.dataIndex;
        },
        "legend.filter" : function(target) {
            this.updateBrush(0, { active: activeIndex });
        }
    }
});
