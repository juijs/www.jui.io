var chart = jui.include("chart.builder");

var data = [
    { quarter : "1Q", sales : 50, profit : 35 },
    { quarter : "2Q", sales : 20, profit : 30 },
    { quarter : "3Q", sales : 10, profit : 5 },
    { quarter : "4Q", sales : 30, profit : 25 }
];

var tpl_tooltip =
'<div id="chart_tooltip" class="popover popover-top">' +
    '<div class="head">Sales & Profit Tooltip</div>' +
    '<div class="body">' +
        '<div class="image"><i class="icon-caution"></i></div>' +
        '<div class="message"><b>Quarter</b>: <!= data.quarter !>&nbsp;&nbsp;<b>Sales</b>: <!= data.sales !>&nbsp;&nbsp;<b>Profit</b>: <!= data.profit !></div>' +
    '</div>' +
'</div>';

var c = chart("#chart", {
    axis : [{
        x : {
            type : "block",
            domain : "quarter",
            line : true
        },
        y : {
            type : "range",
            domain : [ 0, 100 ],
            step : 5,
            line : true
        },
        data : data
    }],
    brush : [{
        type : "line",
        target : [ "sales", "profit" ]
    }, {
        type : "scatter",
        target : [ "sales", "profit" ]
    }],
    tpl : {
        tooltip : tpl_tooltip
    },
    event : {
        mouseover : function(obj, e) {
            if(obj.brush.index == 1) {
                var $tooltip = $(this.tpl.tooltip({ data: obj.data }));
                $("body").append($tooltip);

                $tooltip.css({ "z-index": 10000, left: e.pageX - $tooltip.width() / 2, top: e.pageY - $tooltip.height() });
            }
        },
        mouseout : function(obj, e) {
            if(obj.brush.index == 1) {
                $("#chart_tooltip").remove();
            }
        }
    }
});