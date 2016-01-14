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
		src: "core.html",
        title: "Basic",
        msg: "To make it easier to develop a user interface provides many core functions."
    },
    chart: {
        title: "Charts",
        msg: "Provides a variety of data visualization components.",
        src : "chart.html"
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

	// 화면 비동기 로드
	if(hash[0] == "chart") {
		if(src) {
			$("#chart").load(src);
		}
	} else {
		if(src) {
			$("#" + hash[0]).find(".col").load(src, function() {
				Prism.highlightAll();
			});
		}
	}
}

function checkIeVersion() {
	if(document.all && !document.addEventListener) {
	    alert("This page is only supported browser than IE 9+");
	}
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

jui.ready([ "ui.modal", "ui.dropdown" ], function(modal, dropdown) {
	var download_link = {
		1: "https://github.com/juijs/jui-core/archive/master.zip",
		2: "https://github.com/juijs/jui/archive/master.zip",
		3: "https://github.com/juijs/jui-grid/archive/master.zip",
		4: "https://github.com/juijs/jui-chart/archive/master.zip"
	}

	var download_menu = dropdown("#download_menu", {
		width: 135,
		event: {
			change: function(data) {
				window.open(download_link[data.value]);
			}
		}
	});

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

	$("#btn_download_menu").on("click", function(e) {
		var btn_offset = $("#btn_download_menu").offset();
		download_menu.show(btn_offset.left, btn_offset.top + 12);

		return false;
	});

	// 모바일 버전 이벤트
	$("#sidemenu").on("click", function(e) {
		if($("body").hasClass("menu-open")) {
			$("body").removeClass("menu-open");
		} else {
			$("body").addClass("menu-open");
		}
	});
	$("#sidemenu-close").on("click", function(e) {
		$("body").removeClass("menu-open");
	});

	// 모바일 버전 터치 이벤트
	ontouch($(".menu-window")[0], function(evt, dir, phase, swipetype, distance) {
		if(dir == "right" && phase == "end" && distance > 30) {
			$("body").removeClass("menu-open");
		}
	});

	$(".menu-window").find("a").on("click", function(e) {
		$("body").removeClass("menu-open");
	});
});
