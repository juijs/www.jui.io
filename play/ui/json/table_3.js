jui.ready([ "uix.table" ], function(table) {
    table_3 = table("#table_3", {
        event: {
            expand: function(row, e) {
                $(row.list[0]).html("<i class='icon-right'></i>");
            },
            expandend: function(row, e) {
                $(row.list[0]).html("<i class='icon-left'></i>");
            }
        },
        expand: true,
        animate: true
    });

    table_3.update([
        { name: "Hong", age: "20", location: "Ilsan" },
        { name: "Jung", age: "30", location: "Seoul" },
        { name: "Park", age: "10", location: "Dangjin" }
    ]);

    table_3_submit = function(index) {
        var name = $(table_3.root).find(".name").val(),
            age = $(table_3.root).find(".age").val(),
            location = $(table_3.root).find(".location").val();

        table_3.update(index, { name: name, age: age, location: location });
        table_3.hideExpand();
    }
});