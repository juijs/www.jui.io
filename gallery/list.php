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
        <?php for($i = 0; $i < sizeof($list); $i++) { ?>
        <div class="item">
            <div class="wrap">
                <div class="body">
                    <?php if(isset($list[$i]["info"]->thumbnail)) { ?>
                    <img src="<?php echo $list[$i]["info"]->thumbnail ?>" onclick="/gallery/<?php echo $list[$i]["info"]->name ?>/index.html" />
                    <?php } else { ?>
                    <iframe border="0" frameborder="0" src="/gallery/<?php echo $list[$i]["info"]->name ?>/index.html" scrolling="no"></iframe>
                    <?php } ?>
                    <a href="/?p=gallery.<?php echo $list[$i]["info"]->name ?>"></a>
                </div>
                <div class="footer">
                    <div class="title"><?php echo $list[$i]["info"]->title ?></div>
                    <div class="description"><?php echo $list[$i]["info"]->description ?></div>
                </div>
            </div>
        </div>
        <?php } ?>
    </div>
</div>


