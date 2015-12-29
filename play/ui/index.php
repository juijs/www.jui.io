<!DOCTYPE html>
<html>
<head>
    <?php include("../../tpl/header_play.html"); ?>
    <title>JENNIFER UI: UI Play</title>
    <meta property="og:title" content="JENNIFER UI: UI Play" />
    <?php include("../../tpl/description_en.html") ?>

    <meta property="og:description" content="JENNIFER UI is all free. a simple, fast, many: JUI is all-in-one desktop UI framework. Bootstrap support, Independent style & script components, SVG-based chart components." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://jui.io/ko/index.php" />
    <meta property="og:image" content="http://jui.io/res/img/jui_link.jpg" />
    <meta name="title" content="JENNIFER UI: UI Play" />
    <meta name="description" content="JENNIFER UI is all free. a simple, fast, many: JUI is all-in-one desktop UI framework. Bootstrap support, Independent style & script components, SVG-based chart components." />
    <meta name="keywords" content="HTML, CSS, JS, JavaScript, SVG, chart, framework, bootstrap, front-end, frontend, web development, free, MIT" />
    <meta name="author" content="Alvin, Jayden and Yoha" />

    <link rel="stylesheet" href="../chart/chart.css">
    <link rel="stylesheet" href="component.css">
    <link rel="stylesheet" href="style.css" />
    <script src="component.js" type="text/javascript"></script>
</head>
<body class="jui">

<div class="header">
    <div class="logo">
        <img src="../../res/img/play_logo.png" align="absmiddle" onclick="window.open('../../index.html', 'jui.site')" />
    </div>
    <div class="toolbar">
        <span >
			Themes
			<select onchange="changeTheme(this.value)">
                <option value="jennifer">Jennifer</option>
                <option value="dark">Dark</option>
            </select>
        </span>

        <a href="javascript:comments.show();" class="chart_comments">Leave a comment</a>
    </div>
</div>
<div class="container">
    <div class="menu"></div>
    <div class="content">
        <div class="chart_data">
            <div class="chart_data_main">
                <ul id="types" class="tab top">
                    <li>
                        <a href="#chart-code">Code</a>
                    </li>
                    <li>
                        <a href="#chart-html">HTML</a>
                    </li>
                </ul>

                <div id="types_contents" class="tab-contents">
                    <div id="chart-code">
                        <textarea id="chart-code-text"></textarea>
                    </div>
                    <div id="chart-html">
                        <textarea id="chart-html-text"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="splitter splitter-2"></div>
        <div class="chart_view">
            <div class="chart-main">
                <div id="chart-content-title">
                    <h2>
                        Result

                        <div class="group">
                            <a class='btn btn-api' title="Chart API" href="http://api.jui.io/" target="_blank">API</a>
                            <a class='btn btn-fullscreen' title="Full Screen"><i class='icon-new-window'></i></a>
                        </div>
                    </h2>
                </div>
                <div id="chart-content"></div>
            </div>
        </div>
    </div>
</div>

<link id="jui_theme" rel="stylesheet" href="../../lib/jui/css/ui-jennifer.min.css" />
<?php include("../../tpl/footer_play.html"); ?>

</body>
</html>
