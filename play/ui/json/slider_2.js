jui.ready([ "ui.slider" ], function(slider) {
    slider("#slider_2", {
        type: "double",
        from: 50,
        to: 70,
        min: 0,
        max: 100,
        step: 1,
        tooltip: false,
        event: {
            change: function(data) {
                $("#slider_2_info").html(data.from + "~" + data.to).show();
            }
        }
    });
});