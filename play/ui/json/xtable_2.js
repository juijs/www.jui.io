jui.ready([ "uix.xtable" ], function(xtable) {
    var page = 1;

    xtable_2 = xtable("#xtable_2", {
        fields: [ "name", "age", "location" ],
        resize: true,
        sort: true,
        buffer: "page",
        bufferCount: 20
    });

    xtable_2_submit = function() {
        var result = [];

        for(var i = 0; i < 1000000; i++) {
            result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
        }

        page = 1;
        xtable_2.update(result);
        xtable_2.resize();
    }

    xtable_2_page = function(no) {
        page += no;
        page = (page < 1) ? 1 : page;
        xtable_2.page(page);
    }
});