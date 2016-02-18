$(function() {
    var name = location.hash.replace('#gallery-view-', '');

    var $iframe = $("#gallery-view").find("iframe");

    $iframe.attr('src', '/gallery/' + name + '/');

    $.getJSON("/gallery/" + name + "/package.json", function (data) {
        $iframe.height(data.height || '500px');

        $(".gallery-view-container").find(".title").text(data.title);
        $(".gallery-view-container").find(".description").text(data.description);
    });
});