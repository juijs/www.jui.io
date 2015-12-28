jui.ready([ "ui.button" ], function(button) {
    button_5 = button("#button_5", {
        type: "check",
        value: [ "plus", "edit" ],
        event: {
            change: function(data) {
                var result = "";

                for(var i = 0; i < data.length; i++) {
                    if(data[i] != null) {
                        result += "index(" + data[i].index + "), value(" + data[i].value + ")" + "\n";
                    }
                }

                alert(result);
            }
        }
    });
});