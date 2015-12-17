var iframe = { obj: null, height: null };

var menuInfo = {
    home: {
        src: "home.html",
        title: "Home",
        msg: "JUI is html5-based user interface library."
    },
    about: {
        src: "about.html"
    },
    install: {
        src: "install.html",
        title: "Getting Started",
        msg: "JUI library is very easy to install and use."
    },
    core: {
        title: "Framework",
        msg: "To make it easier to develop a user interface provides many core functions.",
        menu: {
            common: "core/common",
            api: "core/api",
            log: "core/log",
            custom: "core/custom",
            util: "core/utility"
        }
    },
    script: {
        title: "Components",
        msg: "To represent data provides a variety of UI components.",
        menu: {
            common: "script/common",
            button: "#button_1",
            "switch": "#switch_1",
            progress: "#progress_1",
            slider: "#slider_1",
            colorpicker: "#colorpicker_1",
            combo: "#combo_1",
            window: "#win_1",
            table: "#table_1",
            xtable: "#xtable_1",
            dropdown: "#dropdown_1",
            tab: "#tab_1",
            tooltip: "#tooltip_1",
            modal: "#modal_1",
            tree: "#tree_1",
            paging: "#paging_1",
            autocomplete: "#ac_1",
            datepicker: "#datepicker_1",
            notify: "#notify_1",
            layout: "#layout_1",
            accordion: "#accordion_1"
        }
    },
    style: {
        title: "CSS",
        msg: "Fundamental HTML Elements styled and enhanced with extensible classes.",
        menu: {
            common: "style/common",
            typography: "#typography",
            form: "#forms",
            icon: "#icons",
            button: "#buttons",
            "switch": "#switch",
            progress: "#progress",
            slider: "#slider",
            vmenu: "#vmenu",
            dropdown: "#dropdown",
            navbar: "#navbar",
            table: "#tables",
            tab: "#tabs",
            window: "#window",
            msgbox: "#msgbox",
            grid: "#grid",
            tree: "#tree",
            paging: "#paging",
            panel: "#panel",
            bargraph: "#bargraph",
            datepicker: "#datepicker",
            calendar: "#calendar",
            notify: "#notify",
            tooltip: "#tooltip",
            popover: "#popover",
            accordion: "#accordion"
        }
    },
    chart: {
        title: "Charts",
        msg: "Provides a variety of data visualization components.",
        src : "chart/common.html"
    },
    tips: {
    	title: "Third Party",
    	msg: "Bootstrap support, Provides JUI Administrator Tool Samples.",
    	menu: {
    		common: "tips/common",
    		bootstrap: "tips/bootstrap",
            pure: "tips/pure",
            skeleton: "tips/skeleton",
			summernote: "tips/summernote"
    	}
    }
};

var loading = null;
var chart_interval = null;

function initHashEvent() {
	$(window).hashchange(function() {
		if(location.hash.indexOf("#") != -1) {
			hash = location.hash.substring(1).split("/");
			
			if (hash[0].indexOf("chart-") > -1) {
			    return;
			}
			
			initMenuUrl(hash);
			initIFrameResize();				

		} else {
			initMenuUrl([ "home" ]);
		}
		
		$("body").scrollTop(0);
	});
	
	// 온-로드 시점에도 발생
	$(window).hashchange();
}

function initMenuUrl(hash) {
	if(hash[0] != "home") {
		$("header .menu").find("a").removeClass("active");
	}
	
	var src = menuInfo[hash[0]].src;

    // 타이틀 & 메시지 처리
    if(hash == "chart") {
        $(".main, nav.download, nav.about, nav.sub").hide();
    } else {
        // 페이지 변경시 차트 객체 초기화
        if(chart_interval != null) {
            if(chart_1) {
                chart_1.stop();
                chart_1.destroy();
                chart_1 = null;
            }

            if(chart_2) {
                chart_2.destroy();
                chart_2 = null;
            }

            if(chart_3) {
                chart_3.destroy();
                chart_3 = null;
            }

            clearInterval(chart_interval);
        }

        if(hash == "home") {
            $(".main, nav.download").show();
            $("nav.sub").hide();
        } else if(hash == "about") {
            $(".main, nav.download, nav.sub").hide();
            $("nav.about").show();
        } else {
            $(".main, nav.download, nav.about").hide();
            $("nav.sub").show();
            $("nav.sub .title").html(menuInfo[hash[0]].title);
            $("nav.sub .msg").html(menuInfo[hash[0]].msg);
        }
    }

	// 영역 보이기 및 숨기기
	$("article").hide();
	$("#" + hash[0]).show();
	
	// 상단 메뉴바 선택 효과 처리
	$("[href*=" + hash[0] + "]").addClass("active");
	
	// 자바스크립트 및 스타일 처리
	if(hash[0] == "core" || hash[0] == "script" || hash[0]  == "style" || hash[0]  == "tips") {
		for(var key in menuInfo[hash[0]].menu) {
			initSubMenuUrl(hash);
			break;
		}
	} else if(hash[0] == "chart") {
		if(src) {
			loadPage(src);
		}
	} else {
		if(src) {
			loadIframe($("#" + hash[0]).find("iframe"), src);
		}
	}
}

function initSubMenuUrl(hash) {
	// 초기값 처리...
	hash[1] = (hash[1]) ? hash[1] : "common";
	
	var src = menuInfo[hash[0]].menu[hash[1]];
	var $target = $("#" + hash[0]),
		$menu = $target.find(".vmenu a[href='#" + hash[0] + "/" + hash[1] + "']");
		
	$target.find("a").removeClass("active");
	$menu.addClass("active");
	
	if(src) {
		if (hash[0] == "chart") {
			loadPage(src);
		} else {
			if( (hash[0] == "script" && src.indexOf("script/common") == -1) ||
				(hash[0] == "style" && src.indexOf("style/common") == -1) ) {

				var popup = window.open("../res/uiplay/index.html" + src, "jui.uiplay");
				popup.focus();
			} else {
				loadIframe($target.find("iframe"), src);
			}
		}
	}
}

function initIFrameResize() {
	setInterval(function() {
		if(iframe.obj != null) {
			if(iframe.height != getIFrameheight(iframe.obj)) {
				setIFrameHeight(iframe.obj);
			}
		}
	}, 3000);
}

function getIFrameheight(obj) {
	var height = 0;
	
	if(obj.contentDocument && obj.contentDocument.body) {
        height = obj.contentDocument.body.offsetHeight + 40;
    } else if(obj.contentWindow.document.body) {
        height = obj.contentWindow.document.body.scrollHeight;
    }
    
    return height;
}

function setIFrameHeight(obj, id) {
    if($("#" + id).find("iframe")[0] != obj && id) return;

    if(obj.contentDocument && obj.contentDocument.body) {
        obj.height = obj.contentDocument.body.offsetHeight + 40;
    } else if(obj.contentWindow.document.body) {
        obj.height = obj.contentWindow.document.body.scrollHeight;
    }
    
	iframe.obj = obj;
	iframe.height = obj.height;
}

function checkIeVersion() {
	if(document.all && !document.addEventListener) {
	    alert("This page is only supported browser than IE 9+");
	}
}

function loadIframe($iframe, src) {
	//loading.show();
	
	$iframe.attr("src", src + ((src.indexOf(".html") != -1) ? "" : ".html"));
	$iframe.unbind("load");
	
	$iframe.on("load", function(e) {
		//loading.hide();
	});
}

function loadPage(src) {
	$("#chart").load(src);
}

function initAnimation() {
	var $slider = $(".main").find("nav"),
		$prev = $(".img-control-left"),
		$next = $(".img-control-right"),
		$page = $(".dotnav").find("a");

	var index = 0,
		count = $slider.size(),
		isRun = false,
		duration = 300,
		opacity = 1,
		interval = 30000;

	function prev() {
		var prev = index,
			current = index + 1;

		if(current == count) {
			current = 0;
			index = 0;
		} else {
			index++;
		}

		var $prev = $($slider.get(prev)),
			$current = $($slider.get(current));

		isRun = true;

		$prev.addClass("pt-page-moveToLeftFade");
		$current.show().addClass("pt-page-moveFromRightFade");
		$current.on("webkitAnimationEnd", handler);
		$current.on("oAnimationEnd", handler);
		$current.on("MSAnimationEnd", handler);
		$current.on("animationend", handler);

		function handler(e) {
			$prev.removeClass("pt-page-moveToLeftFade");
			$current.removeClass("pt-page-moveFromRightFade");
			show();
		}
	}

	function next() {
		var prev = index,
			current = index - 1;

		if(current == -1) {
			current = count - 1;
			index = count - 1;
		} else {
			index--;
		}

		var $prev = $($slider.get(prev)),
			$current = $($slider.get(current));

		isRun = true;

		$prev.addClass("pt-page-moveToRightFade");
		$current.show().addClass("pt-page-moveFromLeftFade");
		$current.on("webkitAnimationEnd", handler);
		$current.on("oAnimationEnd", handler);
		$current.on("MSAnimationEnd", handler);
		$current.on("animationend", handler);

		function handler(e) {
			$prev.removeClass("pt-page-moveToRightFade");
			$current.removeClass("pt-page-moveFromLeftFade");
			show();
		}
	}

	function show() {
		$page.removeClass("current");

		$slider.each(function(i) {
			if(i == index) {
				$(this).show();
				$($page.get(i)).addClass("current");
			} else {
				$(this).hide();
			}
		});

		isRun = false;
	}

	$page.on("click", function(e) {
		index = $page.index(this);
		show();

		e.preventDefault();
	});

	$prev.on("click", function(e) {
		next();
	}).hover(function(e) {
		$prev.fadeTo(duration, opacity);
	}, function(e) {
		$prev.fadeTo(duration, opacity / 5);
	});

	$next.on("click", function(e) {
		prev();
	}).hover(function(e) {
		$next.fadeTo(duration, opacity);
	}, function(e) {
		$next.fadeTo(duration, opacity / 5);
	});

	$slider.parent().hover(function(e) {
		$prev.fadeTo(duration, opacity / 5);
		$next.fadeTo(duration, opacity / 5);
	}, function(e) {
		$prev.fadeTo(duration, 0);
		$next.fadeTo(duration, 0);
	});

	setInterval(prev, interval);
}

function changeLanguage(from, to) {
	location.href = location.href.split("/" + from + "/").join("/" + to + "/");
}

jui.ready([ "ui.modal" ], function(modal) {
	loading = modal("#floatingBarsG", {
		color: "black"
	});
	
	initHashEvent();
	initAnimation();
	checkIeVersion();

	$("#btn_about").on("click", function(e) {
		location.hash = "#about";
		return false;
	});
});
