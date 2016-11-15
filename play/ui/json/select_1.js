jui.ready([ "ui.select" ], function(SelectBox) {

	var items = [
		{ value : 'jennifer', text : 'Jennifer' } ,
		{ value : 'dark', text : 'Dark' } ,
		{ value : 'pastel', html : '<strong>Pastel</strong>' } ,
		{ value : 'pattern', text : 'Pattern' },
		{ type : 'divider' },
		{
			value : 'gradient',
			html : function () {

				var $dom = $('<img src="http://placehold.it/20x20" width="20px" height="20px" /> <span>Gradient</span>');

				$dom.eq(0).css({
					'vertical-align': 'middle'
				});

				$dom.eq(2).css({
					'color' : 'yellow'
				})

				return $dom;
			}
		}
	];

	window.themeList  = new SelectBox('.theme-list', {
		items : items,
		placeholder: 'THEME',
		event : {
			change : function (value) {
				console.log(value);
			}
		}
	});

});
