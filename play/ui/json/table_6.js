jui.ready([ "ui.dropdown", "uix.table" ], function(dropdown, table) {
    var dd = dropdown("#table_6_dd", {
        event: {
            change: function(data) {
                alert(data.text);
            }
        }
    });

    table_6 = table("#table_6", {
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
        event: {
            rowmenu: function(row, e) {
                var pos = $(e.target).position();

                this.select(row.index);
                dd.move(pos.left, pos.top);
                dd.show();
            }
        },
        tpl: {
            row: $("#tpl_row").html()
        }
    });
});