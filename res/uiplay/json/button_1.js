jui.ready([ "ui.button" ], function(button) {
    button_1 = button("#button_1", {
        type: "radio",
        index: 1,
        event: {
            change: function(data) {
                alert("index(" + data.index + "), value(" + data.value + ")");
            }
        }
    });
});