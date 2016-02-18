$(function() {

    function createGalleryItem (item) {
        var $item = $("<div class='item' />");

        var $header = $("<div class='header' />");
        var $body = $("<div class='body' />");
        var $footer = $("<div class='footer' />");

        $header.append(item.info.name);

        var $iframe = $("<iframe border='0' frameborder='0'/>");
        $iframe.attr('src', '/gallery/' + item.info.name + '/' + item.info.main);
        $iframe.attr('scrolling', 'no');

        var $a = $("<a />").attr('href', '#gallery-view-' + item.info.name);

        $body.append($iframe);
        $body.append($a);
        $footer.append(item.info.title);


        var $wrap = $("<div class='wrap' />");

        $wrap.append($header);
        $wrap.append($body);
        $wrap.append($footer);

        $item.append($wrap);

        return $item;
    }

    function createGallery(data) {
        var $list = $(".gallery-list").empty();
        for(var i = 0, len = data.length; i < len; i++) {
            $list.append(createGalleryItem(data[i]));
        }

        if (data.length % 2 == 1) {
            $list.append("<div class='item' />");
        }
    }


    $.getJSON('/gallery/scandir.php', function (data) {
        createGallery(data);
    });
});