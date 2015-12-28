jui.ready([ "ui.notify" ], function(notify) {
    var handler = {
        show: function(data) {
            console.log("show : " + JSON.stringify(data));
        },
        hide: function(data) {
            console.log("hide : " + JSON.stringify(data));
        },
        click: function(data) {
            console.log("click : " + JSON.stringify(data));
        }
    };

    notify_1 = notify("body", {
        position: "top-right",
        event: handler,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_2 = notify("body", {
        position: "top-left",
        event: handler,
        timeout: 0,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_3 = notify("body", {
        position: "top",
        event: handler,
        timeout: 2000,
        padding: {
            top: 100
        },
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    notify_top_submit = function(type, color) {
        var data = {
            title: "Caution message Send!!!",
            message: "Feb 15, 2013-12-24 02:24:19",
            color: color
        };

        if(type == 1) notify_1.add(data);
        if(type == 2) notify_2.add(data);
        if(type == 3) notify_3.add(data);
    }
});