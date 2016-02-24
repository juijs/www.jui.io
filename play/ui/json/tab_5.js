jui.ready([ "ui.tab" ], function(tab) {
    tab_5 = tab("#tab_5", {
        event: {
            change: function(data, e) {
                if(data.index == 0) {
                    $("#css").show();
                    $("#script").hide();
                } else {
                    $("#css").hide();
                    $("#script").show();
                }
            },
            changemenu: function(data, e) {
                alert(data.text);
            }
        },
        tpl: {
            menu: $("#tpl_menu").html()
        }
    });

    tab_5.show(1);
});