jui.ready([ "uix.tab" ], function(tab) {
    var count = 3;

    tab_3 = tab("#tab_3", {
        nodes: [
            { text: "Tab1" },
            { text: "Tab2" },
            { text: "Tab3" }
        ],
        event: {
            change: function(data) {
                $("#tab_3_contents").html(data.text);
            }
        },
        tpl: {
            node: "<li><a href='#'><!= text !></a></li>"
        }
    });

    tab_3_sumit = function(type) {
        switch(type) {
            case 1:
                count += 1;
                tab_3.append({ text: "Tab" + count });
                break;
            case 2:
                count += 1;
                tab_3.prepend({ text: "Tab" + count });
                break;
            case 3:
                count += 1;
                tab_3.insert(2, { text: "Tab" + count });
                break;
            case 4:
                tab_3.remove(0);
                break;
            case 5:
                tab_3.move(0, 2);
                break;
        }
    }
});