jui.ready([ "ui.progress" ], function(progress) {
    progress_2 = progress("#progress_2", {
        orient: "vertical",
        value: 400,
        min: 0,
        max: 700
    });
});