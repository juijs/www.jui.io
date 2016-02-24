jui.ready([ "ui.tab" ], function(tab) {
    tab_5 = tab("#tab_5", {
        target: "#tab_contents_5",
        tpl: {
            menu: $("#tpl_menu").html()
        }
    });
});