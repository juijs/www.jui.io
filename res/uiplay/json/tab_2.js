jui.ready([ "uix.tab" ], function(tab) {
    tab_2 = tab("#tab_2", {
        event: {
            change: function(data) {
                alert(data.text);
            }
        },
        target: "#tab_contents_2",
        index: 1
    });
});