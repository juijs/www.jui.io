jui.ready([ "ui.dropdown" ], function(dropdown) {
    dd_4 = dropdown("#dd_4", {
        nodes: [
            { value: 1, text: "text1" },
            { value: 2, text: "text2" },
            { value: 3, text: "text3" }
        ],
        event: {
            change: function(data) {
                alert(data.value + ", " + data.text);
            }
        }
    });

    dd_4_update = function() {
        dd_4.update([
            { value: 4, text: "text4" },
            { value: 5, text: "text5" },
            { value: 6, text: "text6" }
        ]);
    }
});