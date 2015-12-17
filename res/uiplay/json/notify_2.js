jui.ready([ "ui.notify" ], function(notify) {
    notify_4 = notify("#notify_target", {
        position: "bottom",
        timeout: 0,
        distance: 30,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_5 = notify("#notify_target", {
        position: "bottom-left",
        showDuration: 1000,
        hideDuration: 1000,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_6 = notify("#notify_target", {
        position: "bottom-right",
        showEasing: "linear",
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_bottom_submit = function(type, color) {
        var data = {
            title: "Caution message Send!!!",
            message: "Feb 15, 2013-12-24 02:24:19",
            color: color
        };

        if(type == 4) notify_4.add(data);
        if(type == 5) notify_5.add(data);
        if(type == 6) notify_6.add(data);
    }
});