<?php
	session_start();

	$page = (isset($_GET["p"])) ? $_GET["p"] : null;
	$contents = file_get_contents("menu.json");
	$contents = utf8_encode($contents);
	$json = json_decode($contents);

	$group = $json->group;
	$list = $json->list;

	function list_filter ($list, $type) {
		$arr = array();
		foreach($list as $item) {
			if ($item->type == $type) {
				$arr[] = $item;
			}
		}

		return $arr;
	}


	foreach($group as $g) {
		$g->list = list_filter($list, $g->type);
	}

?>

<META charset="UTF-8">
<meta name="viewport" content="initial-scale=1, maximum-scale=1">
<link rel="shortcut icon" href="../../res/img/favicon.ico" type="image/x-icon">
<link rel="icon" href="../../res/img/favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="../../lib/codemirror-4.5/lib/codemirror.css">
<link rel="stylesheet" href="../../lib/codemirror-4.5/theme/neo.css">
<script src="../../lib/codemirror-4.5/lib/codemirror.js"></script>
<script src="../../lib/codemirror-4.5/mode/javascript/javascript.js"></script>
<script src="../../lib/codemirror-4.5/mode/xml/xml.js"></script>
<link rel="stylesheet" href="../../lib/jui/css/ui.min.css" />
<link rel="stylesheet" href="../../lib/jui/css/ui-jennifer.min.css" />
<link rel="stylesheet" href="../../lib/jui/css/grid.min.css" />
<link rel="stylesheet" href="../../lib/jui/css/grid-jennifer.min.css" />
<script type="text/javascript" src="../../lib/jquery-1.8.0.min.js" ></script>
<script type="text/javascript" src="../../lib/jui/js/core.min.js" ></script>
<script type="text/javascript" src="../../lib/jui/js/ui.min.js" ></script>
<script type="text/javascript" src="../../lib/jui/js/grid.min.js" ></script>
<script type="text/javascript" src="../../lib/jui/js/chart.min.js" ></script>
<script type="text/javascript" src="../../res/event.js" ></script>
<script>
    $(function() {
        ontouch($(".menu")[0], function(evt, dir, phase, swipetype, distance) {
            if(dir == "right" && phase == "end" && distance > 30) {
                $("body").removeClass("menu-open");
            }
        });
    });
</script>
