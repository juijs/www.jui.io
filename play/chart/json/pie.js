var chart = jui.include("chart.builder");
var names = {
    ie: "IE",
    ff: "Fire Fox",
    chrome: "Chrome",
    safari: "Safari",
    other: "Others"
};

chart("#chart", {
    padding : 150,
    axis : {
        data : [
            { ie : 70, ff : 11, chrome : 9, safari : 6, other : 4 }
        ]
    },
    brush : {
        type : "pie",
        showText : true,
        format : function(k, v) {
            return names[k] + ": " + v;
        }
    },
    widget : [{
        type : "title",
        text : "Pie Sample"
    }, {
        type : "tooltip",
        orient : "left",
        format : function(data, k) {
            return {
                key: names[k],
                value: data[k]
            }
        }
    }, {
        type : "legend",
        format : function(k) {
            return names[k];
        }
    }]
});
