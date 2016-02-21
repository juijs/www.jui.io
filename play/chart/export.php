<?php
    header("Pragma: public");
    header("Expires: 0");
    header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
    header("Content-Type: application/force-download");
    header("Content-Type: application/octet-stream");
    header("Content-Type: application/download");
    header("Content-Transfer-Encoding: binary ");
    header("Content-Type: text/plain");
    header("Content-Disposition: attachment; filename=" . $_POST["filename"]);
    header("Content-Length: " . strlen($_POST["filetext"]));

    echo $_POST["filetext"];
?>