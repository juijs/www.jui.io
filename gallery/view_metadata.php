<?php
    $id = str_replace("gallery.", "", page());
    $contents = file_get_contents("gallery/".$id."/package.json");
    $contents = utf8_encode($contents);
    $json = json_decode($contents);
?>

<title>JENNIFER Gallery: <?php echo $json->title ?></title>
<meta name="title" content="JENNIFER Gallery: <?php echo $json->title ?>" />
<meta name="description" content="<?php echo $json->description ?>" />
<meta name="keywords" content="<?php echo join(",", $json->keywords) ?>" />
<meta name="author" content="<?php echo $json->author ?>" />
<meta property="og:title" content="JENNIFER Gallery: <?php echo $json->title ?>" />
<meta property="og:description" content="<?php echo $json->description ?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://jui.io/?p=gallery.<?php echo $json->name ?>" />
<?php if(isset($json->image)) { ?>
<meta property="og:image" content="<?php echo $json->image ?>" />
<?php } ?>