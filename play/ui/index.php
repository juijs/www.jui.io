<!DOCTYPE html>
<html>
<head>
    <?php include("../header.php"); ?>
    <?php include("metadata.php"); ?>

    <link rel="stylesheet" href="../chart/chart.css">
    <link rel="stylesheet" href="../chart/responsive.css">
    <link rel="stylesheet" href="component.css">
    <script src="component.js" type="text/javascript"></script>
</head>
<body class="jui">

<div class="header">
    <div class="logo">
        <img src="../../res/img/play_logo.png" align="absmiddle" onclick="window.open('http://jui.io', 'jui.site')" />
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

        <i id="sidemenu" class="icon-menu"></i>
    </div>
</div>
<div class="container">
    <div class="menu">
		<?php include("../menu.php"); ?>
		<?php
			if (file_exists("json/".$data->code.".js")) {
				$code_content = file_get_contents("json/".$data->code.".js");
			}
		?>
	</div>
    <div class="content">
        <div class="chart_data">
            <div class="chart_data_main">
                <ul id="types" class="tab top">
                    <li <?php if(!$code_content) { ?>style="display: none;"<?php } ?>>
                        <a href="#chart-code">Code</a>
                    </li>
                    <li <?php if(!$code_content) { ?>class="active"<?php } ?>>
                        <a href="#chart-html">HTML</a>
                    </li>
                </ul>

                <div id="types_contents" class="tab-contents">
                    <div id="chart-code" <?php if(!$code_content) { ?>style="display: none;"<?php } ?>>
                        <textarea id="chart-code-text"><?php echo $code_content ?></textarea>
                    </div>
                    <div id="chart-html">
                        <textarea id="chart-html-text"><?php echo file_get_contents("html/".$data->code.".html"); ?></textarea>
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
                <div id="chart-content">
                    <iframe name="chart-iframe" width="100%" height="100%" frameborder="0" scrolling="no" onload="resizeComponent(this);"></iframe>
                    <form id="chart-form" target="chart-iframe" method="post" action="loader.php">
                        <input type="hidden" name="html" />
                        <input type="hidden" name="code" />
                        <input type="hidden" name="theme" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<link id="jui_theme_ui" rel="stylesheet" href="../../lib/jui/css/ui-jennifer.min.css" />
<link id="jui_theme_grid" rel="stylesheet" href="../../lib/jui/css/grid-jennifer.min.css" />

<?php include("../footer.html"); ?>
<script>
	jui.ready(function() {
		viewCodeEditor($("#chart-code-text").val(), $("#chart-html-text").val());

		var $target = $(".menu").find("li.active");

		if($target.size() == 0) { // 메뉴 매개변수가 없을 때
			$target = $($(".menu").find("li")[0]).addClass("active");
			$("a[data-type=style]").addClass("active");
		} else {
			$("[data-type=" + $target.data("parent") + "]").addClass("active");
		}

		$(".menu").scrollTop($target.offset().top - 100);

	});
</script>

</body>
</html>
