jui.ready([ "ui.accordion" ], function(accordion) {
    accordion_3 = accordion("#accordion_3", {
		multipanel : true,
        event: {
			init : function () {
				console.log('accordian initialized.');
			},
            open: function(index, e) {
                $(this.root).find("i").attr("class", "icon-arrow1");
                $(e.target).find("i").attr("class", "icon-arrow3");
            },
			fold: function(index, e) {
				$(e.target).find("i").attr("class", "icon-arrow1");
			}
        },
        index: 0,
        autoFold: true
    });
});
