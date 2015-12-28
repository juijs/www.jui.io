jui.ready([ "uix.table" ], function(table) {
    table_13 = table("#table_13", {
        fields: [ null, "name", "age", "location" ],
        data: [
            { name: "Hong", age: "20", location: "Ilsan" },
            { name: "Jung", age: "30", location: "Seoul" },
            { name: "Park", age: "15", location: "Yeosu" }
        ],
        scroll: true,
        resize: true
    });

    table_13_submit = function() {
        var rows = [],
            nStart = new Date().getTime();

        for(var i = 0; i < 100; i++) {
            rows.push({ name: "Alvin" + i, age: i, location: "LA" });
        }

        table_13.insert(1, rows);
        var nEnd = new Date().getTime();

        alert("Running time : " + (nEnd - nStart) + "ms");
    }
});