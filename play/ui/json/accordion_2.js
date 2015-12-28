jui.ready([ "ui.accordion" ], function(accordion) {
    accordion_2 = accordion("#accordion_2", {
        event: {
            open: function(index, e) {
                $(this.root).find("i").attr("class", "icon-arrow1");
                $(e.target).find("i").attr("class", "icon-arrow3");
            }
        },
        index: 0,
        autoFold: true
    });
});