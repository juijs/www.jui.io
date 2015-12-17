jui.ready([ "ui.paging", "uix.xtable" ], function(paging, xtable) {
    paging_2 = paging("#paging_2", {
        pageCount: 100,
        event: {
            page: function(pNo) {
                paging_2_xtable.page(pNo);
            }
        },
        tpl: {
            pages: $("#tpl_pages").html()
        }
    });

    paging_2_xtable = xtable("#paging_2_xtable", {
        fields: [ "name", "age", "location" ],
        resize: true,
        sort: true,
        sortLoading: true,
        buffer: "s-page",
        bufferCount: 100,
        event: {
            sortend: function(data, e) {
                paging_2.first();
            }
        },
        tpl: {
            row: $("#tpl_row").html(),
            none: $("#tpl_none").html()
        }
    });

    paging_2_submit = function() {
        var result = [];

        for(var i = 0; i < 1000000; i++) {
            result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
        }

        paging_2_xtable.update(result);
        paging_2_xtable.resize();
        paging_2.reload(paging_2_xtable.count());
    }
});