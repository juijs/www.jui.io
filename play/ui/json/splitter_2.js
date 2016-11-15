jui.ready([ "ui.splitter" ], function(Splitter) {

	window.themeTop  = new Splitter('#container-2 .layout-main', {
		items : [ '.top', '.bottom' ],
		direction: 'horizontal'
	});

});
