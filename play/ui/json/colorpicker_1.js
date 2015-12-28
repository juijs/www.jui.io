jui.ready([ "ui.colorpicker" ], function(colorpicker) {
    colorpicker_1 = colorpicker("#colorpicker_1", {
        event: {
            change: function(color) {
                $("#colorcode_1").val(color);
            }
        }
    });

    $(colorpicker_1.root).hide();
});