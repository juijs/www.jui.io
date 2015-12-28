var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : [{
        x : {
            type : "block",
            domain : "year",
            format : function(text, index) {
                return "";
            },
            image : function(text, index) {
                var opts = {
                    uri: "resource/facebook.png",
                    width: 36,
                    height: 36,
                    dist: 5
                }

                if(text == "2015" || text == "2016" || text == "2017") {
                    opts.uri = "resource/twitter.png";
                }

                return opts;
            }
        },
        y : {
            type : "range",
            domain : "value",
            step : 5,
            image : function(text, index) {
                return {
                    uri: "resource/flag.png",
                    width: 12,
                    height: 12,
                    dist: 24
                }
            }
        },
        data : [
            { year : "2012", value : 50 },
            { year : "2013", value : 60 },
            { year : "2014", value : 70 },
            { year : "2015", value : 80 },
            { year : "2016", value : 90 },
            { year : "2017", value : 100 }
        ]
    }],
    brush : [{
        type : "column",
        outerPadding : 20,
        target : "value"
    }]
});