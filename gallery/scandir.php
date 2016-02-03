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

echo json_encode(directoryList(".", ""));

?>