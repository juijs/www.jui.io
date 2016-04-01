var editor, editor2;
var comments, types;

function viewCodeEditor(code) {
    if(!editor) {
        editor = CodeMirror.fromTextArea($("#chart-code-text")[0], {
            mode: "javascript",
            lineNumbers: true,
            theme : "neo"
        });

        editor.on("change", function(cm) {
            try {
                updateComponent(true);
            } catch(e) {
                console.log(e);
            }
        });
    }

    if(!editor2) {
        editor2 = CodeMirror.fromTextArea($("#chart-html-text")[0], {
            mode: "xml",
            lineNumbers: true,
            theme : "neo"
        });

        editor2.on("change", function(cm) {
            try {
                updateComponent(false);
            } catch(e) {
                console.log(e);
            }
        });
    }

	if(code != null) {
		editor.setValue(code);
	}

	changeTheme($("select").find("option:selected").val());
}

function setFunctions() {
    var $el = $(".btn-fullscreen");

    $el.on('click', function() {
        var $el = $(".chart_view");

        if ($el.hasClass("fullscreen")) {
            $el.removeClass("fullscreen").animate({ left : "50%" });
        } else {
            $el.addClass("fullscreen").animate({ left : "0%" });
        }
    });
}

function updateComponent() {
    var code = editor.getValue(),
        html = editor2.getValue();

    $("#chart-content").find("iframe").height("100%");

    $("#chart-form").find("input[name=html]").val(html ? html : "");
    $("#chart-form").find("input[name=code]").val(code ? code : "");
    $("#chart-form").find("input[name=theme]").val($("select").find("option:selected").val());
	$("#chart-form").submit();
}

function resizeComponent(iframe) {
    $(iframe).height($(iframe).contents().height());
}

function changeTheme(theme) {
    var isFullscreen = $(".chart_view").hasClass("fullscreen");

    $(".chart_view").attr("class", "chart_view " + theme + (isFullscreen ? " fullscreen" : ""));
    $(".chart_data").attr("class", "chart_data " + theme);
    $("#jui_theme_ui").attr("href", "../../lib/jui/css/ui-" + theme + ".min.css");
    $("#jui_theme_grid").attr("href", "../../lib/jui/css/grid-" + theme + ".min.css");

    if(theme == "jennifer") {
        $(".CodeMirror.cm-s-neo").css({
            "background-color": "#ffffff",
            color: "#2e383c"
        });
    } else {
        $(".CodeMirror.cm-s-neo").css({
            "background-color": "#1c1c1c",
            color: "#d5d5d5"
        });
    }

    updateComponent(true);
}

jui.ready([ "util.base", "ui.window" ], function(_, uiWin) {
    setFunctions();

    // 탭 생성
    types = jui.create("ui.tab", "#types", {
        target: "#types_contents",
        index: 0,
		event: {
			change: function(data) {
				if(data.index == 1) {
					editor2.setValue(editor2.getValue());
				}
			}
		}
    });

    // 댓글 모달 윈도우
    comments = uiWin("#comments", {
        width: "90%",
        height: "90%",
        modal: true
    });

    // 모바일 버전 이벤트
    $("#sidemenu").on("mousedown", function(e) {
        if($("body").hasClass("menu-open")) {
            $("body").removeClass("menu-open");
        } else {
            $("body").addClass("menu-open");
        }
    });
});
