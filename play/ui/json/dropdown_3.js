jui.ready([ "ui.dropdown" ], function(dropdown) {
    dd_3 = dropdown("#dd_3", {
        keydown: true,
        event: {
            change: function(data) {
                alert(data.value + ", " + data.text);
            }
        }
    });
});