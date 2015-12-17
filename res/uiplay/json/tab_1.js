jui.ready([ "uix.tab" ], function(tab) {
    tab_1 = tab("#tab_1", {
        event: {
            change: function(data) {
                alert(data.text);
            }
        },
        target: "#tab_contents_1",
        index: 2
    });
});