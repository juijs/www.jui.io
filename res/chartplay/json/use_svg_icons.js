var chart = jui.include("chart.builder");
var names = {
    ie: "IE",
    ff: "Fire Fox",
    chrome: "Chrome",
    safari: "Safari",
    other: "Others"
};

// The SVG icon of style components can be used in chart
chart("#chart", {
    /* When no load is 'jui.css' or Icon file of the other libraries /
    icon: {
        type: "jennifer",
        path: "../../img/icon-list.ttf"
    },
    /**/
    padding : 150,
    axis : {
        data : [
            { ie : 70, ff : 11, chrome : 9, safari : 6, other : 4 }
        ]
    },
    brush : {
        type : "pie",
        format : function(k, v) {
            return names[k] + ": " + v;
        },
        showText : true
    },
    widget : [
    	{
            type : "title",
            text : "Pie Sample"
        }, {
            type : "tooltip",
            orient : "left",
            format : function(k, v) {
                return this.icon("label") + v;
            }
        }, {
            type : "legend",
            icon : "{chart}",
            format : function(k) {
                return names[k];
            }
        }
    ]
});
