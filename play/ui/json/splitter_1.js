jui.ready([ "ui.splitter" ], function(Splitter) {

	window.themeBottom  = new Splitter('#container-1 .layout-main', {
		items : [ '.left', '.right' ]
	});

});
