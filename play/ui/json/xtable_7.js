jui.ready([ "grid.xtable" ], function(xtable) {
	xtable_7 = xtable("#xtable_7", {
        fields: [ "name", "age", "location" ],
        resize: true,
        sort: [ 0, 1 ],
        width: 800,
        scrollWidth: 600,
		scrollHeight: 400,
		rowHeight: 26,
		buffer: "vscroll",
		tpl: {
			row: $("#tpl_row").html(),
			none: $("#tpl_none").html()
		},
		event: {
			select: function(row, e) {
				if(row.type == "fold") {
					this.open(row.index);
				} else {
					this.fold(row.index);
				}
			}
		}
    });

	xtable_7_submit = function() {
		var result = [];

		for(var i = 0; i < 100000; i++) {
			result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
		}

		xtable_7.update(result);
		xtable_7.append("0", { name: "Alvin0.0", age: 15, location: "LA" })
		xtable_7.append("2", { name: "Alvin2.0", age: 20, location: "LA" })
		xtable_7.append("2.0", { name: "Alvin2.0.0", age: 30, location: "LA" })
		xtable_7.append("4", { name: "Alvin4.0", age: 25, location: "LA" })
		xtable_7.append("4", { name: "Alvin4.1", age: 27, location: "LA" })
		xtable_7.append("7", { name: "Alvin7.0", age: 27, location: "LA" })
		xtable_7.append("7.0", { name: "Alvin7.0.0", age: 23, location: "LA" })
		xtable_7.append("7.0", { name: "Alvin7.0.1", age: 22, location: "LA" })
	}
});
