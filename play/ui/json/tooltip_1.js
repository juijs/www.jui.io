jui.ready([ "ui.tooltip" ], function(tooltip) {
    tooltip_1 = tooltip("#tooltip_1");

    tooltip_2 = tooltip("#tooltip_2", {
        position: "bottom",
        showType: "click"
    });

    tooltip_3 = tooltip("#tooltip_3", {
        position: "left",
        delay: 1000
    });

    tooltip_4 = tooltip("#tooltip_4", {
        position: "right",
        width: 300,
        align: "center"
    });
});