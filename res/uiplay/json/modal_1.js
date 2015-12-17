jui.ready([ "ui.modal" ], function(modal) {
    $("#modal_1").appendTo("body");

    modal_1 = modal("#modal_1", {
        color: "black"
    });
});