jui.ready([ "uix.table" ], function(table) {
    table_2 = table("#table_2", {
        tpl: {
            row: $("#tpl_row").html()
        }
    });

    table_2.update([
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