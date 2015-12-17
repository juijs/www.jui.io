jui.ready([ "uix.xtable" ], function(xtable) {
    xtable_1 = xtable("#xtable_1", {
        fields: [ "name", "age", "location" ],
        resize: true,
        colshow: true,
        sort: true,
        sortLoading: true,
        buffer: "scroll",
        bufferCount: 20,
        event: {
            colmenu: function(column, e) {
                this.showColumnMenu(e.pageX - 25);
            }
        }
    });

    xtable_1_submit = function() {
        var result = [];

        for(var i = 0; i < 1000000; i++) {
            result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
        }

        xtable_1.update(result);
    }
});