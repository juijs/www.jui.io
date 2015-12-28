jui.ready([ "ui.paging" ], function(paging) {
    paging_1 = paging("#paging_1", {
        count: 1000,
        pageCount: 10,
        screenCount: 7,
        event: {
            page: function(pNo) {
                alert(pNo);
            }
        }
    });
});