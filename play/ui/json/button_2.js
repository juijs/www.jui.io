jui.ready([ "ui.button" ], function(button) {
    button_2 = button("#button_2", {
        type: "radio",
        event: {
            change: function(data) {
                alert("index(" + data.index + "), value(" + data.value + ")");
            }
        }
    });
});