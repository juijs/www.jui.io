jui.ready([ "ui.tooltip" ], function(tooltip) {
    tooltip_5 = tooltip("#tooltip_5", {
        position: "right",
        width: 300,
        align: "left",
        showType: "click",
        hideType: "click",
        tpl: {
            item: $("#tpl_popover").html()
        }
    });
});