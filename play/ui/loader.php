<?php header("X-XSS-Protection: 0"); ?>
<!DOCTYPE html>
<html>
<head>
    <META charset="UTF-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="../../lib/jui/css/ui.min.css" />
    <link rel="stylesheet" href="../../lib/jui/css/grid.min.css" />
    <link rel="stylesheet" href="../../lib/jui/css/ui-<?php echo $_POST["theme"] ?>.min.css" />
    <link rel="stylesheet" href="../../lib/jui/css/grid-<?php echo $_POST["theme"] ?>.min.css" />
    <script type="text/javascript" src="../../lib/jquery-1.8.0.min.js" ></script>
    <script type="text/javascript" src="../../lib/jui/js/core.min.js" ></script>
    <script type="text/javascript" src="../../lib/jui/js/ui.min.js" ></script>
    <script type="text/javascript" src="../../lib/jui/js/grid.min.js" ></script>
    <script type="text/javascript" src="../../lib/jui/js/chart.min.js" ></script>
    <script>
    <?php
        echo $_POST["code"];
    ?>
    </script>
</head>
<body class="jui">
<?php
    echo $_POST["html"];
?>
----------------------------------------------------<br/>
<?php
    echo $_POST["code"];
?>
</body>
</html>
