jui.ready([ "ui.splitter" ], function(Splitter) {

	// implements border-layout

	new Splitter('#container-3 .layout-main', {
		items : [ '.top', '.main-group' ],
		minSize : [ 50, 200],
		direction: 'horizontal'
	});

	/*
	new Splitter('.layout-main-group', {
		items : [ '.main', '.bottom' ],
		minSize : [ 100, 50],
		direction: 'horizontal'
	}); */

	new Splitter('.layout-center-group', {
		items : [ '.left', '.center-group' ],
		minSize : [50, 100],
		fixed : true
	});

	new Splitter('.layout-right', {
		items : [ '.center', '.right' ],
		minSize : 50
	});

});
