<?php
    $id = str_replace("gallery.", "", page());
    $contents = file_get_contents("gallery/".$id."/package.json");
    $contents = utf8_encode($contents);
    $json = json_decode($contents);
?>

<link rel="stylesheet" href="gallery/view.css" />
<div class="gallery-view-container">
    <div class="gallery-view-info">
        <h1 class="title"><?php echo $json->title ?></h1>
        <p class="description"><?php echo $json->description ?></p>
    </div>
    <iframe src="/gallery/<?php echo $id ?>" width="100%" height="<?php echo $json->height ?>"></iframe>
</div>