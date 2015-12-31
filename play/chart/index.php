<!DOCTYPE html>
<html>
<head>
    <?php include("../../tpl/header_play.html"); ?>
    <title>JENNIFER UI: Chart Play</title>
    <meta property="og:title" content="JENNIFER UI: Chart Play" />
    <?php include("../../tpl/description_en.html") ?>

    <link rel="stylesheet" href="../../lib/jui/css/ui-jennifer.min.css" />
    <link rel="stylesheet" href="chart.css">
    <link rel="stylesheet" href="responsive.css">
    <script src="chart.js" type="text/javascript"></script>
    <script src="event.js" type="text/javascript"></script>
</head>
<body class="jui">

<div class="header">
    <div class="logo">
        <img src="../../res/img/play_logo.png" align="absmiddle" onclick="window.open('../../index.html', 'jui.site')" />
    </div>
    <div class="toolbar">
        <span>
			Themes
			<select onchange="changeTheme(this.value)">
                <option value="jennifer">Jennifer</option>
                <option value="dark">Dark</option>
                <option value="pastel">Pastel</option>
                <option value="gradient">Gradient</option>
                <option value="pattern">Pattern</option>
            </select>
        </span>

        <a href="javascript:comments.show();" class="chart_comments">Leave a comment</a>

        <i id="sidemenu" class="icon-menu"></i>
    </div>
</div>
<div class="container">
    <div class="menu"></div>
    <div class="content">
        <div class="chart_data">
            <div class="chart_data_main">
                <ul id="tab_1" class="tab top">
                    <li>
                        <a href="#chart-code">Code</a>
                    </li>
                    <li>
                        <a href="#chart-data">Data</a>
                    </li>
                    <li>
                        <a href="#chart-style">Style</a>
                    </li>
                </ul>

                <div id="tab_contents_1" class="tab-contents">
                    <div id="chart-code">
                        <textarea id="chart-code-text"></textarea>
                    </div>
                    <div id="chart-data">
                        <table id="table_1" class="table simple nowrap">
                            <thead>
                            <tr></tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                    <div id="chart-style">
                        <table id="table_2" class="table simple nowrap">
                            <thead>
                            <tr>
                                <th>Key</th>
                                <th>Value</th>
                            </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
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
                            <a class='btn btn-style' title="Show Styles"><i class='icon-edit'></i></a>
                            <a class='btn btn-image' title="Download Image"><i class='icon-image'></i></a>
                            <a class='btn btn-fullscreen' title="Full Screen"><i class='icon-new-window'></i></a>
                        </div>
                    </h2>
                </div>
                <div id="chart-content"></div>
            </div>
        </div>
    </div>
</div>

<?php include("../../tpl/footer_play.html"); ?>

</body>
</html>
