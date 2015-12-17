var editor, editor2;
var comments, types;
var currentChartIndex = 0;

var charts = [
    { type: "style", title: "Styles" },
    { type: "button", title: "Button" },
    { type: "switch", title: "Switch" },
    { type: "progress", title: "Progress Bar" },
    { type: "slider", title: "Slider" },
    { type: "colorpicker", title: "Color Picker" },
    { type: "combo", title: "Combo Box" },
    { type: "window", title: "Window" },
    { type: "table", title: "Table" },
    { type: "xtable", title: "X-Table" },
    { type: "dropdown", title: "Dropdown" },
    { type: "tab", title: "Tab" },
    { type: "tooltip", title: "Tooltip" },
    { type: "modal", title: "Modal" },
    { type: "tree", title: "Tree" },
    { type: "paging", title: "Paging" },
    { type: "autocomplete", title: "Auto Complete" },
    { type: "datepicker", title: "Date Picker" },
    { type: "notify", title: "Notification" },
    { type: "layout", title: "Layout" },
    { type: "accordion", title: "Accordion" }
];

var code_list = [
    // Scripts
    { type: "button", title: "Radio. Get selected value", code: "button_1" },
    { type: "button", title: "Radio. Set to the index", code: "button_2" },
    { type: "button", title: "Radio. Set to the value", code: "button_3" },
    { type: "button", title: "Check. Set to the index", code: "button_4" },
    { type: "button", title: "Check. Set to the value", code: "button_5" },
    { type: "switch", title: "Default switch", code: "switch_1" },
    { type: "progress", title: "Horizontal progress bar", code: "progress_1" },
    { type: "progress", title: "Vertical progress bar", code: "progress_2" },
    { type: "slider", title: "Single slider", code: "slider_1" },
    { type: "slider", title: "Double slider", code: "slider_2" },
    { type: "colorpicker", title: "Default colorpicker", code: "colorpicker_1" },
    { type: "combo", title: "Get selected text", code: "combo_1" },
    { type: "combo", title: "Set to the index", code: "combo_2" },
    { type: "window", title: "Move & Resizing window", code: "win_1" },
    { type: "window", title: "Modal window", code: "win_2" },
    { type: "window", title: "Using a different style", code: "win_3" },
    { type: "table", title: "Default table", code: "table_1" },
    { type: "table", title: "Cell merge in row", code: "table_2" },
    { type: "table", title: "Use the extended area", code: "table_3" },
    { type: "table", title: "Scroll to rows", code: "table_4" },
    { type: "table", title: "Select to multiple rows", code: "table_5" },
    { type: "table", title: "Mouse right-click event", code: "table_6" },
    { type: "table", title: "Sorting rows", code: "table_7" },
    { type: "table", title: "Editing rows", code: "table_8" },
    { type: "table", title: "Right-click editing rows", code: "table_9" },
    { type: "table", title: "Remove row", code: "table_11" },
    { type: "table", title: "Append rows", code: "table_12" },
    { type: "table", title: "Insert rows", code: "table_13" },
    { type: "table", title: "Hide & Show columns", code: "table_14" },
    { type: "table", title: "Export to CSV file", code: "table_15" },
    { type: "table", title: "Import to CSV file", code: "table_16" },
    { type: "table", title: "Append/Insert tree rows", code: "table_17" },
    { type: "table", title: "Move/Remove/Modify tree rows", code: "table_18" },
    { type: "table", title: "Update tree rows", code: "table_19" },
    { type: "xtable", title: "Data scrolling", code: "xtable_1" },
    { type: "xtable", title: "Data paging", code: "xtable_2" },
    { type: "xtable", title: "Data paging & scrolling", code: "xtable_3" },
    { type: "xtable", title: "Data filters", code: "xtable_4" },
    { type: "xtable", title: "Horizontal scroll bar", code: "xtable_5" },
    { type: "dropdown", title: "Show & Hide dropdown", code: "dropdown_1" },
    { type: "dropdown", title: "Auto Close prevention", code: "dropdown_2" },
    { type: "dropdown", title: "Control by keyboard", code: "dropdown_3" },
    { type: "dropdown", title: "Update list", code: "dropdown_4" },
    { type: "tab", title: "Top tabs", code: "tab_1" },
    { type: "tab", title: "Bottom tabs", code: "tab_2" },
    { type: "tab", title: "Tab manipulation", code: "tab_3" },
    { type: "tab", title: "Tab dragging", code: "tab_4" },
    { type: "tooltip", title: "Default tooltip", code: "tooltip_1" },
    { type: "tooltip", title: "With popover style", code: "tooltip_2" },
    { type: "modal", title: "Global modal", code: "modal_1" },
    { type: "modal", title: "Inside modal", code: "modal_2" },
    { type: "tree", title: "Append nodes", code: "tree_1" },
    { type: "tree", title: "Move/Remove/Update node", code: "tree_2" },
    { type: "tree", title: "Tree dragging", code: "tree_3" },
    { type: "paging", title: "Default paging", code: "paging_1" },
    { type: "paging", title: "Use the paging on the table", code: "paging_2" },
    { type: "autocomplete", title: "Default auto complete", code: "ac_1" },
    { type: "autocomplete", title: "Update word list", code: "ac_2" },
    { type: "datepicker", title: "Daily date picker", code: "datepicker_1" },
    { type: "datepicker", title: "Monthly date picker", code: "datepicker_2" },
    { type: "datepicker", title: "Yearly date picker", code: "datepicker_3" },
    { type: "datepicker", title: "Daily calendar", code: "datepicker_4" },
    { type: "notify", title: "Notification to the top", code: "notify_1" },
    { type: "notify", title: "Notification to the bottom", code: "notify_2" },
    { type: "layout", title: "Split Screens", code: "layout_1" },
    { type: "accordion", title: "Default accordion", code: "accordion_1" },
    { type: "accordion", title: "Close accordion", code: "accordion_2" },

    // Styles
    { type: "style", title: "Typography", code: "typography" },
    { type: "style", title: "Forms", code: "forms" },
    { type: "style", title: "Icons", code: "icons" },
    { type: "style", title: "Buttons", code: "buttons" },
    { type: "style", title: "Switch", code: "switch" },
    { type: "style", title: "Progress Bar", code: "progress" },
    { type: "style", title: "Slider", code: "slider" },
    { type: "style", title: "Vertical Menu", code: "vmenu" },
    { type: "style", title: "Dropdown Menu", code: "dropdown" },
    { type: "style", title: "Navgation Bar", code: "navbar" },
    { type: "style", title: "Tables", code: "tables" },
    { type: "style", title: "Tabs", code: "tabs" },
    { type: "style", title: "Window", code: "window" },
    { type: "style", title: "Message Box", code: "msgbox" },
    { type: "style", title: "Tree Menu", code: "tree" },
    { type: "style", title: "Paging", code: "paging" },
    { type: "style", title: "Panel", code: "panel" },
    { type: "style", title: "Bar Graph", code: "bargraph" },
    { type: "style", title: "Date Picker", code: "datepicker" },
    { type: "style", title: "Calendar", code: "calendar" },
    { type: "style", title: "Notify", code: "notify" },
    { type: "style", title: "Tooltip", code: "tooltip" },
    { type: "style", title: "Popover", code: "popover" },
    { type: "style", title: "Accordion", code: "accordion" },
    { type: "style", title: "Grid", code: "grid" }
];

// 시작 위치 설정
for(var i = 0; i < charts.length; i++) {
    var c = charts[i];

    for(var j = 0; j < code_list.length; j++) {
        if(c.type == code_list[j].type && c.start == undefined) {
            c.start = j;
        }
    }
}

function loadChartList() {
    var $menu = $("<div />").addClass("vmenu vmenu-rect");

    for(var  i = 0; i < charts.length; i++) {
        var chart = charts[i];
        var $el = $("<a />").data('start', chart.start).addClass('chart-' + chart.type).on('click', function() {
            var start = $(this).data('start');

            $("[data-index=" + start + "]").click();

        });

        $el.append(chart.title);
        $menu.append($el);

        var $submenu = $("<ul />").addClass("submenu");

        for (var index = chart.start; index < code_list.length; index++) {
            var code = code_list[index];

            if (chart.type != code.type) {
                break;
            }

            var $a = $("<a />").attr({
                id : "chart-list-" + index,
                href : "#" + code.code,
                "data-type" : code.type
            }).html(code.title).on('click', function(e) {

            });

            if(!code.hide) {
                $c = $("<li />").html($a);
                $submenu.append($c);
            }
        }

        $menu.append($submenu);
    }

    $(".menu").html($menu);

    // 외부 URL 유입으로 인한 해쉬 이벤트 처리
    $(window).hashchange(function() {
        var index = getIndexByCode(location.hash);
            code = code_list[index];

        currentChartIndex = index;
        viewCodeEditor();

        // 액티브 메뉴 및 스크롤 설정
        $(".vmenu .active").removeClass("active");
        $("#chart-list-" + index).parent().addClass("active");
        var $group = $(".vmenu .chart-" + code.type);
        $group.addClass("active");
        $(".container > .menu").scrollTop($group.position().top);
    });

    // 온-로드 시점에도 발생
    $(window).hashchange();
}

function getIndexByCode(code) {
    if(code == "") return 0;

    for(var i = 0; i < code_list.length; i++) {
        if("#" + code_list[i].code == code) {
            return i;
        }
    }

    return 0;
}

function viewCodeEditor() {
    var code = code_list[currentChartIndex];

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
            mode: "htmlmixed",
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

    if(code.type == "style") {
        $("#types").find("li:first-child").hide();

        $.ajax({
            url : "html.style/" + code.code + ".html",
            dataType: "text",
            success: function(data) {
                types.show(1);
                editor2.setValue(data);

                // 현재 테마 적용
                changeTheme($("select").find("option:selected").val());
            },
            error: function(data, error) {
                console.log(error);
            }
        });
    } else {
        $("#types").find("li:first-child").show();

        $.ajax({
            url : "html/" + code.code + ".html",
            dataType: "text",
            success: function(data) {
                types.show(1);
                editor2.setValue(data);

                $.ajax({
                    url: "json/" + code.code + ".js",
                    dataType: "text",
                    success: function(data) {
                        types.show(0);
                        editor.setValue(data);

                        // 현재 테마 적용
                        changeTheme($("select").find("option:selected").val());
                    },
                    error: function(data, error) {
                        console.log(error);
                    }
                });
            },
            error: function(data, error) {
                console.log(error);
            }
        });
    }
}

function setFunctions() {
    var $el = $(".btn-fullscreen");

    $el.on('click', function() {
        var $el = $(".chart_view");

        if ($el.hasClass("fullscreen")) {
            $el.removeClass("fullscreen").animate({ left : "50%" }, viewCodeEditor);
        } else {
            $el.addClass("fullscreen").animate({ left : "0%" }, viewCodeEditor);
        }
    });
}

function updateComponent(isCode) {
    var code = editor.getValue(),
        html = editor2.getValue();

    if(!isCode && html != "") {
        $("#chart-content").html(html);
    }

    if(isCode && code != "") {
        eval(code);
    }
}

function changeTheme(theme) {
    $(".chart_view").attr("class", "chart_view " + theme);
    $(".chart_data").attr("class", "chart_data " + theme);
    $("#jui_theme").attr("href", "../../lib/jui.new/" + theme + ".theme.min.css");

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
}

jui.ready([ "util.base", "uix.window" ], function(_, uiWin) {
    editor = null;

    loadChartList();
    setFunctions();

    // 탭 생성
    types = jui.create("uix.tab", "#types", {
        target: "#types_contents",
        index: 0
    });

    // 댓글 모달 윈도우
    comments = uiWin("#comments", {
        width: "90%",
        height: "90%",
        modal: true
    });

    $("#chart-list-0").click();
});