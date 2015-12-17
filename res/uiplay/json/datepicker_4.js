jui.ready([ "ui.datepicker" ], function(datepicker) {
    datepicker_4 = datepicker("#datepicker_4", {
        titleFormat: "yyyy. MM",
        format: "yyyy-MM-dd",
        event: {
            select: function(date, e) {
                alert(date);
            }
        },
        tpl: {
            date: $("#tpl_date").html()
        }
    });
});