jui.ready([ "grid.xtable" ], function(xtable) {
    xtable_8 = xtable("#xtable_8", {
        fields: [ "url", "count" ],
		resize: true,
        buffer: "vscroll",
		rowHeight: 27,
		scrollHeight: 300,
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

	xtable_8.updateTree([
		{ index: "0", type: "open", data: { url: "/", count: 105 } },
		{ index: "0.0", type: "fold", data: { url: "/css", count: 35 } },
		{ index: "0.0.0", type: "fold", data: { url: "/index.css", count: 15 } },
		{ index: "0.0.1", type: "fold", data: { url: "/layout.css", count: 15 } },
		{ index: "0.0.2", type: "fold", data: { url: "/login.css", count: 5 } },
		{ index: "0.1", type: "fold", data: { url: "/js", count: 35 } },
		{ index: "0.1.0", type: "fold", data: { url: "/index.js", count: 23 } },
		{ index: "0.1.1", type: "fold", data: { url: "/jquery.js", count: 12 } },
		{ index: "0.2", type: "fold", data: { url: "/img", count: 0 } },
		{ index: "0.2.0", type: "fold", data: { url: "logo.ico", count: 0 } },
		{ index: "0.3", type: "fold", data: { url: "/main.jsp", count: 10 } },
		{ index: "0.4", type: "fold", data: { url: "/login.jsp", count: 10 } },
		{ index: "0.5", type: "fold", data: { url: "/sitemap.xml", count: 10 } },
		{ index: "0.6", type: "fold", data: { url: "/package.json", count: 5 } }
	]);
});
