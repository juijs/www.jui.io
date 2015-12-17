(function() {
	function analysis(obj, target) {
		var uiApi = {
			prop: {},
			opt: {},
			method: {},
			event: {},
			tpl: {}
		};

		target.method = $.extend(target.method, coreApi.method);
		target.prop = $.extend(target.prop, coreApi.prop);
		
		for(var key in obj) {
			var o = obj[key];
			
			if(typeof(o) == "function") {
				if(key != "init" && key != "setting" && key != "constructor" && key != "valid") {
					uiApi.method[key] = $.extend({ 
						name: (coreApi.method[key]) ? ("<i>" + key + "</i>") : key
					}, target.method[key]);
				}
			} else {
				uiApi.prop[key] = $.extend({
					name: (coreApi.prop[key]) ? ("<i>" + key + "</i>") : key
				}, target.prop[key]);
					
				if(key == "event") {
					for(var i = 0; i < o.length; i++) {
						uiApi.event[o[i].type] = $.extend({
							name: o[i].type
						}, target.event[o[i].type]);
					}
				} else if(key == "tpl") {
					for(var k in o) {
						uiApi.tpl[k] = $.extend({
							name: k
						}, target.tpl[k]);
					}
				} else if(key == "options") {
					for(var k in o) {
						var def = o[k];
						
						if(o[k] == null) {
							def = "null";
						} else if(typeof(o[k]) == "string") {
							def = "'" + o[k] + "'";
						} else if(typeof(o[k]) == "object") {
							def = ($.isArray(o[k])) ? "[]" : JSON.stringify(o[k]);
						}
							
						uiApi.opt[k] = $.extend({ 
							name: (coreApi.opt[k]) ? ("<i>" + k + "</i>") : k,
							def: def
						}, coreApi.opt[k], target.opt[k]);
					}
				}
			}
		}
		
		return uiApi;
	}
	
	function loadDisqus(url) {
		if($(".disqus").size() > 0) return;

		var url = (!url) ? "../../res/disqus.tpl" : url;

		$.get(url, function(html) {
			$("body").append(html);
		});
	}
	
	// 디스커스 댓글 추가
	$(function() {
		var url = location.href;
		if(url.indexOf("_api") != -1 || url.indexOf("custom.html") != -1 || url.indexOf("utility.html") != -1) return;

		url = (url.indexOf("install.html") == -1) ? "../../res/disqus.tpl" : "../res/disqus.tpl";
		loadDisqus(url);
	});
	
	if(typeof(jui) == "object") {
		// 로그 툴 실행 아이콘 추가
		jui.ready(function(ui, uix, _) {
			var url = location.href,
				hash = location.hash;
				
			if(url.indexOf("_api") != -1 || url.indexOf("_markup") != -1 || url.indexOf("script") == -1) return;
			
			var $icon = $('<div class="logtool" title="Click on the button to logging tool is run."></div>');
			$("body").append($icon);
			
			ui.tooltip($icon, {
				position: "left",
				delay: 1000
			});

			$icon.on("click", function(e) {
				jui.log("../../lib/jui/tool/debug.html");
			});
		});
		
		// API 문서 관련 함수
		window.juiApi = function(ui, uiApi, tplFunc, callback, target) {
			var uiObj = analysis(ui, uiApi),
                sel = target || "body";
			
			$.get("../../res/manual.tpl", function(html) {
				$(sel).append(html);
				$(sel).find("#method").html(tplFunc($("#tpl_3").html(), { items: uiObj.method }));
                $(sel).find("#opt").html(tplFunc($("#tpl_4").html(), { items: uiObj.opt }));
                $(sel).find("#event").html(tplFunc($("#tpl_2").html(), { items: uiObj.event }));
                $(sel).find("#prop").html(tplFunc($("#tpl_2").html(), { items: uiObj.prop }));
                $(sel).find("#tpl").html(tplFunc($("#tpl_2").html(), { items: uiObj.tpl }));

				if(typeof(callback) == "function") {
					callback();
				} else {
					if($(sel).find("#method tr").size() == 1) {
						$(sel).find("#api_method").remove();
					}
					if($(sel).find("#opt tr").size() == 1) {
						$(sel).find("#api_opt").remove();
					}
					if($(sel).find("#event tr").size() == 1) {
						$(sel).find("#api_event").remove();
					}
					if($(sel).find("#tpl tr").size() == 1) {
						$(sel).find("#api_tpl").remove();
					}
					if($(sel).find("#prop tr").size() == 1) {
						$(sel).find("#api_prop").remove();
					}
				}

				loadDisqus();
			});
		};

        window.juiApiChart = function(type, chartApi, tplFunc, callback, target, apiKey) {
            var mod = jui.include("chart." + type);
                sel = target || "body";

            $.get("../../res/manual_chart.tpl", function(html) {
                $(sel).append(html);
                var tpl = $("#tpl_chart").html();

                for(var key in mod) {
					if(key != "core") {
						printApi(tpl, key);
					}
                }

                if(typeof(callback) == "function") {
                    callback();
                }
            });

			function printApi(tpl, key) {
				var api = (chartApi[key]) ? chartApi[key] : {};

				var o = getDrawOptions({}, mod[key]),
					opts = {};

				for(var k in o) {
					var def = o[k];

					if (o[k] == null) {
						def = "null";
					} else if (typeof(o[k]) == "string") {
						def = "'" + o[k] + "'";
					} else if (typeof(o[k]) == "object") {
						def = ($.isArray(o[k])) ? "[]" : JSON.stringify(o[k]);
					}

					if(coreApi[apiKey]) {
						opts[k] = $.extend({
							name: (coreApi[apiKey][k]) ? ("<i>" + k + "</i>") : k,
							def: def
						}, coreApi[apiKey][k], api[k]);
					} else {
						opts[k] = $.extend({
							name: k,
							def: def
						}, api[k]);
					}
				}

				if (opts != null) {
					$(sel).append(tplFunc(tpl, { key: key, items: opts, exist: true }));
				} else {
					$(sel).append(tplFunc(tpl, { key: key, items: {}, exist: false }));
				}
			}

			function getDrawOptions(options, Draw) {
				if(typeof(Draw) == "function") {
					if(typeof(Draw.setup) == "function") {
						var opts = Draw.setup();

						for(var key in opts) {
							if(!options[key]) {
								options[key] = opts[key];
							}
						}
					}

					getDrawOptions(options, Draw.parent);
				}

				return options;
			}
        };
	}
})();