jui.ready([ "ui.datepicker" ], function(datepicker) {
    datepicker_1 = datepicker("#datepicker_1", {
        titleFormat: "yyyy. MM",
        format: "yyyy/MM/dd",
        event: {
            select: function(date, e) {
                alert(date);
            },
            prev: function(e) {
                alert("prev");
            },
            next: function(e) {
                alert("next");
            }
        },
        tpl: {
            date: $("#tpl_date").html()
        }
    });
});