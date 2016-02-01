module.exports = function(grunt) {
	var webapp_path = "lib/";

	grunt.initConfig({
		"curl-dir": {
			"jui-core.js": {
				src: [
					"https://raw.githubusercontent.com/juijs/jui-core/develop/dist/core.js",
					"https://raw.githubusercontent.com/juijs/jui-core/develop/dist/core.min.js"
				],
				dest: webapp_path + "jui/js"
			},
			"jui-chart.js": {
				src: [
					"https://raw.githubusercontent.com/juijs/jui-chart/develop/dist/chart.js",
					"https://raw.githubusercontent.com/juijs/jui-chart/develop/dist/chart.min.js"
				],
				dest: webapp_path + "jui/js"
			},
			"jui.js": {
				src: [
					"https://raw.githubusercontent.com/juijs/jui/develop/dist/ui.js",
					"https://raw.githubusercontent.com/juijs/jui/develop/dist/ui.min.js"
				],
				dest: webapp_path + "jui/js"
			},
			"jui.css": {
				src: [
					"https://raw.githubusercontent.com/juijs/jui/develop/dist/ui.css",
					"https://raw.githubusercontent.com/juijs/jui/develop/dist/ui.min.css",
					"https://raw.githubusercontent.com/juijs/jui/develop/dist/ui-jennifer.css",
					"https://raw.githubusercontent.com/juijs/jui/develop/dist/ui-jennifer.min.css",
					"https://raw.githubusercontent.com/juijs/jui/develop/dist/ui-dark.css",
					"https://raw.githubusercontent.com/juijs/jui/develop/dist/ui-dark.min.css"
				],
				dest: webapp_path + "jui/css"
			},
			"jui-grid.js": {
				src: [
					"https://raw.githubusercontent.com/juijs/jui-grid/develop/dist/grid.js",
					"https://raw.githubusercontent.com/juijs/jui-grid/develop/dist/grid.min.js"
				],
				dest: webapp_path + "jui/js"
			},
			"jui-grid.css": {
				src: [
					"https://raw.githubusercontent.com/juijs/jui-grid/develop/dist/grid.css",
					"https://raw.githubusercontent.com/juijs/jui-grid/develop/dist/grid.min.css",
					"https://raw.githubusercontent.com/juijs/jui-grid/develop/dist/grid-jennifer.css",
					"https://raw.githubusercontent.com/juijs/jui-grid/develop/dist/grid-jennifer.min.css",
					"https://raw.githubusercontent.com/juijs/jui-grid/develop/dist/grid-dark.css",
					"https://raw.githubusercontent.com/juijs/jui-grid/develop/dist/grid-dark.min.css"
				],
				dest: webapp_path + "jui/css"
			},
			"jui.img.icon": {
				src: [
					"https://raw.githubusercontent.com/juijs/jui/develop/img/icon/icomoon.eot",
					"https://raw.githubusercontent.com/juijs/jui/develop/img/icon/icomoon.svg",
					"https://raw.githubusercontent.com/juijs/jui/develop/img/icon/icomoon.ttf",
					"https://raw.githubusercontent.com/juijs/jui/develop/img/icon/icomoon.woff"
				],
				dest: webapp_path + "jui/img/icon"
			}
		},

		pkg: grunt.file.readJSON("package.json")
	});

	require("load-grunt-tasks")(grunt);
};

