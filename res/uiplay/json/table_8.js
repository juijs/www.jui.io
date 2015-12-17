jui.ready([ "uix.table" ], function(table) {
    table_8 = table("#table_8", {
        fields: [ null, "name", "age", "location" ],
        data: [
            { name: "Hong", age: "20", location: "Ilsan" },
            { name: "Jung", age: "30", location: "Seoul" },
            { name: "Park", age: "15", location: "Yeosu" },
            { name: "Kang", age: "32", location: "Seoul" },
            { name: "Song", age: "12", location: "Gwangju" },
            { name: "Yoon", age: "22", location: "Damyang" },
            { name: "Kim", age: "33", location: "Busan" },
            { name: "Hwang", age: "21", location: "Seoul" }
        ],
        editRow: true,
        resize: true,
        sort: true,
        event: {
            editend: function(row) {
                for(var key in row.data) {
                    if(key == "age" && isNaN(row.data[key])) {
                        alert("Age must enter a numeric value.");
                        return false;
                    }
                }
            }
        },
        tpl: {
            row: $("#tpl_row").html()
        }
    });
});