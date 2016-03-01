<?php
    session_start();

    function language() {
        return isset($_GET["lang"]) ? $_GET["lang"] : null;
    }

    function page() {
        return isset($_GET["p"]) ? $_GET["p"] : null;
    }

    function startsWith($haystack, $needle) {
        return $needle === "" || strrpos($haystack, $needle, -strlen($haystack)) !== false;
    }

    // 언어 세션이 없을 경우
    if(!isset($_SESSION["lang"])) {
        $_SESSION["lang"] = "en";
    }

    // 언어 변경을 할 경우
    if(language() == "ko" || language() == "en") {
        $_SESSION["lang"] = language();
    }

    $lang = $_SESSION["lang"];
?>
<!DOCTYPE HTML>
<html>
<head>
    <?php include("doc/header.html"); ?>

    <?php
        if(startsWith(page(), "gallery.") == false) {
            if(page() == "gallery") {
                include("gallery/metadata.html");
            } else {
                include("doc/".$lang."/metadata.html");
            }
        }
    ?>
</head>
<body class="jui">
<?php include("doc/header_menu.html"); ?>

<?php
    if(page() == null) {
        include("doc/".$lang."/main.html"); ?>

        <article>
            <div class="center row">
                <?php include("doc/".$lang."/home.html"); ?>
            </div>
        </article>
    <?php } else if(page() == "about") { ?>
        <nav class="navbar fixed top about">
            <div class="center">
                <div class="notice">
                    <?php include("doc/".$lang."/about_title.html"); ?>
                </div>
                <img src="../res/img/about.png" />
            </div>
        </nav>
        <article>
            <div class="center row">
                <?php include("doc/".$lang."/about.html"); ?>
            </div>
        </article>
    <?php } else if(page() == "chart") { ?>
        <article>
            <div class="row">
                <?php include("doc/".$lang."/chart.html"); ?>
            </div>
        </article>
    <?php } else if(page() == "gallery") { ?>
        <article>
            <?php include("gallery/list.php"); ?>
        </article>
    <?php } else if(startsWith(page(), "gallery.")) { ?>
        <article>
            <?php include("gallery/view.php") ?>
        </article>
    <?php } else { ?>
        <nav class="navbar fixed top sub">
            <div class="center">
                <?php if(page() == "install") { ?>
                    <?php include("doc/".$lang."/install_title.html"); ?>
                <?php } if(page() == "basic") { ?>
                    <?php include("doc/".$lang."/basic_title.html"); ?>
                <?php } ?>
            </div>
        </nav>
        <article>
            <div class="center row">
                <?php include("doc/".$lang."/".page().".html"); ?>
            </div>
        </article>
<?php } ?>

<?php include("doc/footer.html"); ?>
</body>
</html>
