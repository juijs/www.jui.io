jui.ready([ "ui.dropdown" ], function(dropdown) {
    dd_2 = dropdown("#dd_2", {
        close: false,
        event: {
            change: function(data) {
                alert(data.value + ", " + data.text);
            }
        }
    });
});