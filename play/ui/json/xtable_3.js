jui.ready([ "uix.xtable" ], function(xtable) {
    var page = 1;

    xtable_3 = xtable("#xtable_3", {
        fields: [ "name", "age", "location" ],
        resize: true,
        sort: true,
        buffer: "s-page",
        bufferCount: 20
    });

    xtable_3_submit = function() {
        var result = [];

        for(var i = 0; i < 1000000; i++) {
            result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
        }

        page = 1;
        xtable_3.update(result);
        xtable_3.resize();
    }

    xtable_3_page = function(no) {
        page += no;
        page = (page < 1) ? 1 : page;
        xtable_3.page(page);
    }
});