jui.ready([ "ui.datepicker" ], function(datepicker) {
    datepicker_3 = datepicker("#datepicker_3", {
        type: "yearly",
        titleFormat: "",
        format: "yyyy",
        event: {
            select: function(date, e) {
                alert(date);
            }
        }
    });
});