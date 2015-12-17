jui.ready([ "ui.dropdown", "uix.table" ], function(dropdown, table) {
    var dd = dropdown("#table_9_dd", {
        event: {
            change: function(data) {
                if(data.index == 0) {
                    var index = table_9.activeIndex();

                    if(index != null) {
                        table_9.showEditRow(index);
                    }
                }

                table_9.unselect();
            }
        }
    });

    table_9 = table("#table_9", {
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
        editEvent: false,
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