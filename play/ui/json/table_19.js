jui.ready([ "uix.table" ], function(table) {
    table_19 = table("#table_19", {
        resize: true
    });

    table_19_submit = function(depth) {
        var key = "0",
            rows = [];

        for(var i = 0; i < depth; i++) {
            rows.push({ index: key, data: { name: "Hong" + i, age: Math.floor(Math.random() * 100) } });
            key += ".0";
        }

        table_19.updateTree(rows);
    }
});