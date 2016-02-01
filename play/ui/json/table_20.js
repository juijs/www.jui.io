jui.ready([ "grid.table" ], function(table) {
    table_20 = table("#table_20", {
        fields: [ "name", "age", "location" ],
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
        moveRow: true,
        event: {
            move: function(row, e) {
                return confirm("Do you want to change the row position?");
            },
            moveend: function(row, e) {
                console.log("Completed.");
            }
        }
    });
});