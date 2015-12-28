jui.ready([ "uix.table" ], function(table) {
    table_12 = table("#table_12", {
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
        scroll: true,
        resize: true,
        tpl: {
            row: $("#tpl_row").html()
        }
    });

    table_12_submit = function() {
        var rows = [],
            nStart = new Date().getTime();

        for(var i = 0; i < 1000; i++) {
            rows.push({ name: "Alvin" + i, age: i, location: "LA" });
        }

        table_12.append(rows);
        var nEnd = new Date().getTime();

        alert("Running time : " + (nEnd - nStart) + "ms");
    }
});