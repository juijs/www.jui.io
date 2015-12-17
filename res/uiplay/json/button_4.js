jui.ready([ "ui.button" ], function(button) {
    button_4 = button("#button_4", {
        type: "check",
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