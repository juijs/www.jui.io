jui.ready([ "ui.property" ], function(PropertyView) {

	window.complexSettings = new PropertyView('#panel-settings', {
		items : [
			{ type : 'group', title : 'Inner Property', description : 'it can be nested property view '},
			{ type : 'checkbox', title : 'Controls', key : 'controls' , value : true, description : 'Display controls in the bottom right corner' },
			{ type : 'checkbox', title : 'Progress', key : 'progress' , value : true, description : 'Display a presentation progress bar' },
			{ type : 'checkbox', title : 'Slide Number', key : 'slideNumber' , value : false, description : 'Display the page number of the current slide' },
			{ type : 'checkbox', title : 'History', key : 'history' , value : false, description : 'Push each slide change to the browser history' },
			{ type : 'checkbox', title : 'Keyboard', key : 'keyboard' , value : true, description : 'Enable keyboard shortcuts for navigation' },
		],
		event : {
			change : function (item, newValue, oldValue) {
				console.log('item : ', item);
				console.log('all items', this.getValue());
			}
		}
	});

});
