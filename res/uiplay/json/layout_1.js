jui.ready([ "ui.layout" ], function(layout) {
    layout_1 = layout("#layout_1", {
        width: "auto",
        height: 400,
        left: {
            size: 100,
            min: 100,
            max: 300,
            resize: true
        },
        right: {
            size: 100,
            min: 100,
            max: 300,
            resize: true
        }
    });
});