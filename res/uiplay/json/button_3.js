jui.ready([ "ui.button" ], function(button) {
    button_3 = button("#button_3", {
        type: "radio",
        event: {
            change: function(data) {
                alert("index(" + data.index + "), value(" + data.value + ")");
            }
        }
    });
});