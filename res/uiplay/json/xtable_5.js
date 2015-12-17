jui.ready([ "uix.xtable" ], function(xtable) {
    xtable_5 = xtable("#xtable_5", {
        fields: [ "name", "age", "location" ],
        data: [
            { name: "Hong", age: "20", location: "Ilsan" },
            { name: "Jung", age: "30", location: "Seoul" },
            { name: "Park", age: "10", location: "Dangjin" }
        ],
        resize: true,
        sort: true,
        width: 800,
        scrollWidth: 600
    });
});