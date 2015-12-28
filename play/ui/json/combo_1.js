jui.ready([ "ui.combo" ], function(combo) {
    combo_1 = combo("#combo_1", {
        index: 2,
        event: {
            change: function(data) {
                alert("text(" + data.text + "), value(" + data.value + ")");
            }
        }
    });
});