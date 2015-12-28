jui.ready([ "ui.accordion" ], function(accordion) {
    accordion_1 = accordion("#accordion_1", {
        event: {
            open: function(index, e) {
                $(this.root).find("i").attr("class", "icon-arrow1");
                $(e.target).find("i").attr("class", "icon-arrow3");
            }
        },
        index: 1
    });
});