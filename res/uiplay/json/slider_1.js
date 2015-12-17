jui.ready([ "ui.slider" ], function(slider) {
    slider("#slider_1", {
        type: "single",
        orient: "vertical",
        from: 0.5,
        min: 0,
        max: 1,
        step: 0.1,
        format: function(d) {
            return d.toFixed(1);
        }
    });
});