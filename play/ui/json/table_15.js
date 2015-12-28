jui.ready([ "uix.table" ], function(table) {
    table_15 = table("#table_15", {
        fields: [ "name", "age", "location" ],
        csv: [ "name", "age" ],
        csvNames: [ "Name", "Age" ],
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
        resize: true,
        sort: true,
        event: {
            sort: function(column, e) {
                $("#table_15_btn").attr("href", this.getCsvBase64());
            }
        }
    });

    $("#table_15_btn").attr("href", table_15.getCsvBase64());
});