jui.ready([ "grid.xtable" ], function(xtable) {
    xtable_1 = xtable("#xtable_1", {
        fields: [ "name", "age", "location" ],
        colshow: [ 0, 1, 2],
        sort: [ 0, 2 ],
        sortLoading: true,
		resize: true,
        buffer: "scroll",
        bufferCount: 20,
		scrollHeight: 300,
        event: {
            colmenu: function(column, e) {
                this.showColumnMenu(e.pageX - 25);
            }
        },
		tpl: {
			row: $("#tpl_row").html(),
			none: $("#tpl_none").html(),
			menu: $("#tpl_menu").html(),
			loading: $("#tpl_loading").html()
		}
    });

    xtable_1_submit = function() {
        var result = [];

        for(var i = 0; i < 1000000; i++) {
            result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
        }

        xtable_1.update(result);
    }
});
