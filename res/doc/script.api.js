jui.ready([ "util.base", "ui", "uix", "chart.builder", "chartx.realtime", "chart.axis" ], function(_, ui, uix, builder, r_builder, Axis) {
    var autocomplete = uix.autocomplete("#autocomplete", {
        event: {
            change: function() {}
        }
    });
    if(autocomplete != null) {
        juiApi(autocomplete, uiApi, _.template);
    }

    var button = ui.button("#button", {
        event: {
            change: function() {}
        }
    });
    if(button != null) {
        juiApi(button, uiApi, _.template, function () {
            $("#api_tpl").hide();
        });
    }

    var chart = builder("#chart", {
        event: {
            click: function() {},
            dblclick: function() {},
            rclick: function() {},
            mouseover: function() {},
            mouseout: function() {},
            mousemove: function() {},
            mousedown: function() {},
            mouseup: function() {},
            "chart.click": function() {},
            "chart.dblclick": function() {},
            "chart.rclick": function() {},
            "chart.mouseover": function() {},
            "chart.mouseout": function() {},
            "chart.mousemove": function() {},
            "chart.mousedown": function() {},
            "chart.mouseup": function() {},
            "bg.click": function() {},
            "bg.dblclick": function() {},
            "bg.rclick": function() {},
            "bg.mouseover": function() {},
            "bg.mouseout": function() {},
            "bg.mousemove": function() {},
            "bg.mousedown": function() {},
            "bg.mouseup": function() {},
            "legend.filter": function() {},
            "topology.nodeclick": function() {},
            "topology.edgeclick": function() {}
        },
        axis: {}
    });

    if(chart != null) {
        uix.tab("#chart_tab", {
            target: "#chart_tab_contents",
            event: {
                change: function(data, e) {
                    if(data.index == 1 && $("#axis").html() == "") {
                        juiApi(chart.axis(0), axisApi, _.template, null, "#axis");
                    } else if(data.index == 3 && $("#brush").html() == "") {
                        juiApiChart("brush", brushApi, _.template, null, "#brush", "brush");
                    } else if(data.index == 4 && $("#widget").html() == "") {
                        juiApiChart("widget", widgetApi, _.template, null, "#widget", "widget");
                    } else if(data.index == 2 && $("#grid").html() == "") {
                        juiApiChart("grid", gridApi, _.template, null, "#grid", "grid");
                    }
                }
            }
        });

        juiApi(chart, uiApi, _.template, function () {
            $("#api_tpl").hide();
        }, "#builder");
    }

    var combo = ui.combo("#combo", {
        event: {
            change: function() {}
        }
    });
    if(combo != null) {
        juiApi(combo, uiApi, _.template, function () {
            $("#api_tpl").hide();
        });
    }

    var datepicker = ui.datepicker("#datepicker", {
        event: {
            select: function() {},
            prev: function() {},
            next: function() {}
        }
    });
    if(datepicker != null) {
        juiApi(datepicker, uiApi, _.template);
    }

    var dropdown = ui.dropdown("#dropdown", {
        event: {
            change: function() {},
            show: function() {},
            hide: function() {},
            reload: function() {}
        }
    });
    if(dropdown != null) {
        juiApi(dropdown, uiApi, _.template);
    }

    var layout = ui.layout("#layout");
    if(layout != null) {
        juiApi(layout, uiApi, _.template, function () {
            $("#api_event").hide();
            $("#api_tpl").hide();
        });
    }

    var modal = ui.modal("#modal");
    if(modal != null) {
        juiApi(modal, uiApi, _.template, function () {
            $("#api_event").hide();
            $("#api_tpl").hide();
        });
    }

    var notify = ui.notify("#notify", {
        event: {
            select: function() {},
            show: function() {},
            hide: function() {}
        },
        tpl: {
            alarm: $("#tpl_notify").html()
        }
    });
    if(notify != null) {
        juiApi(notify, uiApi, _.template);
    }

    var paging = ui.paging("#paging", {
        event: {
            page: function() {}
        }
    });
    if(paging != null) {
        juiApi(paging, uiApi, _.template);
    }

    var realtime = r_builder("#realtime", {
        brush : {
            type : "line",
            target : [ "s1", "s2", "s3" ]
        }
    });
    if(realtime != null) {
        juiApi(realtime, uiApi, _.template, function () {
            $("#api_tpl").hide();
            $("#api_event").hide();
        });
    }

    var tab = uix.tab("#tab", {
        event: {
            change: function(data) {},
            changeMenu: function(data) {},
            dragstart: function() {},
            dragend: function() {}
        }
    });
    if(tab != null) {
        juiApi(tab, uiApi, _.template);
    }

    var table = uix.table("#table", {
        tpl: {
            row: ".",
            menu: ".",
            expand: ".",
            none: "."
        },
        event: {
            select: function() {},
            click: function() {},
            dblclick: function() {},
            sort: function() {},
            scroll: function() {},
            rowmenu: function() {},
            colclick: function() {},
            coldblclick: function() {},
            colmenu: function() {},
            colshow: function() {},
            colhide: function() {},
            colresize: function() {},
            editstart: function() {},
            editend: function() {},
            expand: function() {},
            expandend: function() {},
            open: function() {},
            fold: function() {},
            openall: function() {},
            foldall: function() {}
        }
    });
    if(table != null) {
        juiApi(table, uiApi, _.template);
    }

    var tooltip = ui.tooltip("#tooltip", {
        event: {
            show: function() {},
            hide: function() {}
        },
        tpl: {
            message: "."
        }
    });
    if(tooltip != null) {
        juiApi(tooltip, uiApi, _.template);
    }

    var tree = uix.tree("#tree", {
        root: { title: "C:\\" },
        event: {
            select: function() {},
            open: function() {},
            fold: function() {},
            dragstart: function() {},
            dragend: function() {}
        },
        tpl: {
            node: ""
        }
    });
    if(tree != null) {
        juiApi(tree, uiApi, _.template);
    }

    var window = uix.window("#window", {
        event: {
            show: function() {},
            hide: function() {},
            resize: function() {},
            move: function() {}
        }
    });
    if(window != null) {
        juiApi(window, uiApi, _.template, function () {
            $("#api_tpl").hide();
        });
    }

    var xtable = uix.xtable("#xtable", {
        tpl: {
            row: ".",
            menu: ".",
            expand: ".",
            none: "."
        },
        event: {
            select: function() {},
            sort: function() {},
            scroll: function() {},
            rowmenu: function() {},
            colclick: function() {},
            coldblclick: function() {},
            colmenu: function() {},
            colshow: function() {},
            colhide: function() {},
            colresize: function() {},
            expand: function() {},
            expandend: function() {}
        }
    });
    if(xtable != null) {
        juiApi(xtable, uiApi, _.template);
    }

    var accordion = ui.accordion("#accordion", {
        event: {
            open: function() {},
            fold: function() {}
        }
    });
    if(accordion != null) {
        juiApi(accordion, uiApi, _.template);
    }
});