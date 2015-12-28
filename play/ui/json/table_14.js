jui.ready([ "uix.table" ], function(table) {
    table_14 = table("#table_14", {
        fields: [ "name", "age", "location" ],
        data: [
            { name: "Hong", age: "20", location: "Ilsan" },
            { name: "Jung", age: "30", location: "Seoul" },
            { name: "Park", age: "15", location: "Yeosu" }
        ],
        colshow: true,
        sort: true,
        resize: true,
        event: {
            colmenu: function(column, e) {
                this.showColumnMenu(e.pageX - 25);
            }
        },
        tpl: {
            row: $("#tpl_row").html(),
            menu: $("#tpl_menu").html()
        }
    });
});