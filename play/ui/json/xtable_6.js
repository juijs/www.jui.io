jui.ready([ "grid.xtable" ], function(xtable) {
    xtable_6 = xtable("#xtable_6", {
        fields: [ "name", "age", "location" ],
        resize: true,
        sort: true,
        width: 800,
        scrollWidth: 600,
		scrollHeight: 400,
		rowHeight: 26,
		buffer: "vscroll",
		tpl: {
			row: "<tr><td><!= name !></td><td><!= age !></td><td><!= location !></td></tr>",
			none: "<tr><td colspan='3' class='none' align='center'>Data does not exist.</td></tr>"
		}
    });

	xtable_6_submit = function() {
		var result = [];

		for(var i = 0; i < 1000000; i++) {
			result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
		}

		xtable_6.update(result);
	}
});
