jui.ready([ "ui.dropdown" ], function(dropdown) {
    dd_1 = dropdown("#dd_1", {
        event: {
            change: function(data) {
                alert(data.value + ", " + data.text);
            }
        }
    });
});