jui.ready([ "ui.datepicker" ], function(datepicker) {
    datepicker_2 = datepicker("#datepicker_2", {
        type: "monthly",
        titleFormat: "yyyy",
        format: "yyyy/MM",
        event: {
            select: function(date, e) {
                alert(date);
            }
        }
    });
});