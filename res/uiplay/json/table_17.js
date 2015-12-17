jui.ready([ "uix.table" ], function(table) {
    table_17 = table("#table_17", {
        fields: [ "name", "age", "location" ],
        scroll: true,
        resize: true,
        event: {
            select: function(row) {
                alert("index(" + row.index + "), name(" + row.data.name + ")");
            }
        }
    });

    table_17.update([
        { name: "Hong", age: "20", location: "Ilsan" },
        { name: "Jung", age: "30", location: "Seoul" },
        { name: "Park", age: "15", location: "Yeosu" },
        { name: "Kang", age: "32", location: "Seoul" },
        { name: "Song", age: "12", location: "Gwangju" },
        { name: "Yoon", age: "22", location: "Damyang" },
        { name: "Kim", age: "33", location: "Busan" },
        { name: "Hwang", age: "21", location: "Seoul" }
    ]);

    table_17_submit = function() {
        table_17.append("1", { name: "Kang", age: "21" });
        table_17.append("1", { name: "Jung", age: "33" });
        table_17.insert("1.2", { name: "Park", age: "45" } );
        table_17.insert("1.3", { name: "Hwang", age: "12" } );
        table_17.insert("1.2.0", { name: "Roo", age: "32" } );
        table_17.insert("1.2.1", { name: "Jung", age: "14" } );
        table_17.insert("3.0", { name: "Yoon", age: "17" } );
        table_17.insert("3.1", { name: "Kim", age: "21" } );
        table_17.insert("3.2", { name: "Kim", age: "28" } );

        table_17.scroll();
    }
});