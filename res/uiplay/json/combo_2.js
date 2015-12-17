jui.ready([ "ui.combo" ], function(combo) {
    combo_2 = combo("#combo_2", {
        index: 3,
        width: 200,
        keydown: true,
        event: {
            change: function(data) {
                alert("text(" + data.text + "), value(" + data.value + ")");
            }
        }
    });
});