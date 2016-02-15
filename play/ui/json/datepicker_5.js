jui.ready([ "ui.datepicker", "util.time" ], function(datepicker, time) {
    var min = time.add(new Date(), time.days, -5),
        max = time.add(new Date(), time.days, 5);

    datepicker_5 = datepicker("#datepicker_5", {
        titleFormat: "yyyy. MM",
        format: "yyyy-MM-dd",
        minDate: min,
        maxDate: max,
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