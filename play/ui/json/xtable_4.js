jui.ready([ "uix.xtable" ], function(xtable) {
    xtable_4 = xtable("#xtable_4", {
        fields: [ "name", "age", "location" ],
        data: [
            { name: "Hong", age: "20", location: "Ilsan" },
            { name: "Jung", age: "30", location: "Seoul" },
            { name: "Park", age: "10", location: "Dangjin" }
        ],
        resize: true,
        sort: true,
        buffer: "s-page",
        bufferCount: 20
    });

    xtable_4_submit = function(isMulti) {
        if(isMulti) {
            xtable_4.filter(function(data) {
                if(data.age >= 30 || data.name.indexOf("ng") != -1) {
                    return true;
                }
            });
        } else {
            xtable_4.filter(function(data) {
                if(data.location.indexOf("eo") != -1) {
                    return true;
                }
            });
        }
    }
});