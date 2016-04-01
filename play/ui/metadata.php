<?php
	$info = $list[0];

	for ($j = 0; $j < sizeof($list); $j++) {
		if($page == $list[$j]->code) {
			$info = $list[$j];
		}
	}
?>
<title>JUI UIPlay: <?php echo $info->title ?></title>
<meta name="title" content="JUI UIPlay: <?php echo $info->title ?>" />
<meta name="author" content="Alvin, Jayden and Yoha" />
<meta property="og:title" content="JUI UIPlay: <?php echo $info->title ?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://uiplay.jui.io/?p=<?php echo $info->code ?>" />
<meta property="og:image" content="http://jui.io/res/img/jui_uiplay.jpg" />
