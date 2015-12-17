jui.ready([ "uix.table" ], function(table) {
    table_5 = table("#table_5", {
        event: {
            click: function(row, e) {
                if($(row.element).hasClass("checked")) {
                    this.uncheck(row.index);
                } else {
                    this.check(row.index);
                }
            }
        },
    });

    table_5.update([
        { name: "Hong", age: "20", location: "Ilsan" },
        { name: "Jung", age: "30", location: "Seoul" },
        { name: "Park", age: "15", location: "Yeosu" },
        { name: "Kang", age: "32", location: "Seoul" },
        { name: "Song", age: "12", location: "Gwangju" },
        { name: "Yoon", age: "22", location: "Damyang" },
        { name: "Kim", age: "33", location: "Busan" },
        { name: "Hwang", age: "21", location: "Seoul" }
    ]);
});