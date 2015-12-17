jui.ready([ "uix.table" ], function(table) {
    table_18 = table("#table_18", {
        fields: [ "name", "age", "location" ],
        scroll: true,
        resize: true,
        event: {
            select: function(row) {
                alert("index(" + row.index + "), name(" + row.data.name + ")");
            }
        },
        tpl: {
            row: $("#tpl_row").html()
        }
    });

    table_18.update([
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