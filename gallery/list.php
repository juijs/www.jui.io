<?php

function directoryList($path, $omit = '') {
    $arr = scandir($path);

    $list = array();
    foreach($arr as $file) {
        if ($file == '.' || $file == '..') continue;

        $real_path = $path.DIRECTORY_SEPARATOR.$file;
        $real_name = str_replace($omit, "", $real_path);

        if (is_dir($real_path)) {
            $dir = array(
                'is_dir' => true,
                'name' => $file,
                'list' => directoryList($real_path, $omit),
                'path' => $real_name
            );

            $infofile = $real_path.DIRECTORY_SEPARATOR.'package.json';
            $dir['info'] = json_decode(@file_get_contents($infofile));

            $list[] = $dir;
        }
    }

    usort($list, function($a, $b) {
        if ($a['list'] && !$b['list']) {
            return -1;
        } else if (!$a['list'] && $b['list']) {
            return 1;
        }

        return $a['name'] < $b['name'] ? -1 : 1;
    });

    return $list;
}

$list = directoryList("./gallery", "");
?>

<link rel="stylesheet" href="gallery/list.css" />

<div class="gallery-container">
    <div class="gallery-list">
        <?php for($i = 0; $i < sizeof($list); $i++) {
			$thumbnail = "gallery/".$list[$i]["info"]->name."/thumbnail.png";
			$link = "gallery/".$list[$i]["info"]->name."/index.html";
			$isThumbnail = file_exists($thumbnail);
        ?>
        <div class="item <?php if(!$isThumbnail) { ?>iframe<?php } ?>">
            <div class="wrap">
                <div class="body">
                    <?php if($isThumbnail) { ?>
                    <img src="<?php echo $thumbnail ?>" onclick="<?php echo $link ?>" />
                    <?php } else { ?>
                    <iframe border="0" frameborder="0" src="<?php echo $link ?>" scrolling="no"></iframe>
                    <?php } ?>
                    <a href="/?p=gallery.<?php echo $list[$i]["info"]->name ?>"></a>
                </div>
                <div class="footer">
                    <div class="title" title="<?php echo $list[$i]["info"]->title ?>"><?php echo $list[$i]["info"]->title ?></div>
                    <div class="description" title="<?php echo $list[$i]["info"]->description ?>"><?php echo $list[$i]["info"]->description ?></div>
                </div>
            </div>
        </div>
        <?php } ?>
    </div>
</div>


