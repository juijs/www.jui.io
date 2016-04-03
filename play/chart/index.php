<!DOCTYPE html>
<html>
<head>
    <?php include("../header.php"); ?>
    <?php include("metadata.php"); ?>

    <link rel="stylesheet" href="../../lib/jui/css/ui-jennifer.min.css" />
    <link rel="stylesheet" href="chart.css">
    <link rel="stylesheet" href="responsive.css">
    <script src="chart.js" type="text/javascript"></script>
    <script src="resource/f16_model.js" type="text/javascript"></script>
</head>
<body class="jui">

<div class="header">
    <div class="logo">
        <img src="../../res/img/play_logo.png" align="absmiddle" onclick="window.open('http://jui.io', 'jui.site')" />
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
                <option value="custom">Custom</option>
            </select>
        </span>

        <a href="javascript:comments.show();" class="chart_comments">Leave a comment</a>

        <i id="sidemenu" class="icon-menu"></i>
    </div>
</div>
<div class="container">
    <div class="menu">
		<?php
			include("../menu.php");
			$csv = isset($data->csv) ? $data->csv : true;
		?>
	</div>
    <div class="content">
        <div class="chart_data">
            <div class="chart_data_main">
                <ul id="tab_1" class="tab top">
                    <li>
                        <a href="#chart-code">Code</a>
                    </li>
					<?php if($csv) { ?>
                    <li>
                        <a href="#chart-data">Data</a>
                    </li>
					<?php } ?>
                    <li>
                        <a href="#chart-style">Style</a>
                    </li>
                </ul>

                <div class="tools">
                    <div class="group">
                        <a class="btn small" id="clear_btn">Clear</a>
                        <a class="btn small" id="clear_all_btn">Clear All</a>
                    </div>

                    <a class="btn small" id="save_btn" title="Save source code"><i class="icon-save"></i></a>
					<?php if($csv) { ?>
                    <div class="group csv">
                        <a class="btn small" id="export_csv_btn" title="Export CSV file"><i class="icon-download"></i></a>
                        <input type="file" id="import_csv_input" />
                        <a class="btn small" id="import_csv_btn" title="Import CSV file"><i class="icon-upload"></i></a>
                    </div>
					<?php } ?>
                    <div class="group theme">
                        <a class="btn small" id="export_theme_btn" title="Export Theme file"><i class="icon-download"></i></a>
                        <input type="file" id="import_theme_input" />
                        <a class="btn small" id="import_theme_btn" title="Import Theme file"><i class="icon-upload"></i></a>
                    </div>
                </div>

                <div id="tab_contents_1" class="tab-contents">
                    <div id="chart-code">
                        <textarea id="chart-code-text"><?php echo file_get_contents("json/".$data->code.".js"); ?></textarea>
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
                            <a class='btn btn-image' title="Download Image"><i class='icon-image'></i></a>
                            <a class='btn btn-fullscreen' title="Full Screen"><i class='icon-new-window'></i></a>
                        </div>
                    </h2>
                </div>
                <div id="result"></div>
            </div>
        </div>
    </div>
</div>

<div id="colors_win" class="msgbox" style="display: none;">
    <div class="head">
        Edit Colors
        <a href="#" class="close"><i class="icon-exit"></i></a>
    </div>
    <div class="body">
        <table id="colors_table" class="table simple small">
            <thead>
            <tr>
                <th>Color</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</div>

<div id="color_pick" class="colorpicker"></div>

<script id="tpl_alarm" type="text/template">
    <div class="notify <!= color !>">
        <div class="title"><!= title !></div>
        <div class="message"><!= message !></div>
    </div>
</script>

<script id="tpl_table_2" type="text/template">
<tr>
    <td><!= key !></td>

    <! if(key.indexOf("Color") != -1) { !>
    <td style="background: <!= value !>"><!= value !></td>
	<! } else if(key.indexOf("Image") != -1) { !>
	<td><img src="<!= value !>"/></td>
    <! } else { !>
	<td><!= value !></td>
    <! } !>
</tr>
</script>

<?php include("../footer.html"); ?>
<script>
	function getChartKey() {
		return "<?php echo $data->code ?>";
	}

	jui.ready(function() {
		viewCodeEditor($("#chart-code-text").val());

		var $target = $(".menu").find("li.active");

		if($target.size() == 0) { // 메뉴 매개변수가 없을 때
			$target = $($(".menu").find("li")[0]).addClass("active");
			$("a[data-type=basic]").addClass("active");
		} else {
			$("[data-type=" + $target.data("parent") + "]").addClass("active");
		}

		$(".menu").scrollTop($target.offset().top - 100);
	});
</script>

</body>
</html>
