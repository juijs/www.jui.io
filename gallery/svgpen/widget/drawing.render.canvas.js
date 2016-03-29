jui.define("util.render.canvas", [], function () {
	var DrawingRenderCanvas = function (canvas) {

		var rect;

		this.initFilter = function () {
			var filter = canvas.svg.filter({
				id : 'drop-shadow',
				height: '130%'
			});

			filter.append(canvas.svg.feGaussianBlur({
				in : "SourceAlpha",
				stdDeviation : 5,
				result : 'blur'
			}));

			filter.append(canvas.svg.feOffset({
				in : "blur",
				dx : 5,
				dy : 5,
				result : 'offsetBlur'
			}));

			var feMerge = canvas.svg.feMerge();
			filter.append(feMerge);

			feMerge.append(canvas.svg.feMergeNode({
				in : 'offsetBlur'
			}));

			feMerge.append(canvas.svg.feMergeNode({
				in : 'SourceGraphic'
			}));

			canvas.chart.appendDefs(filter);
		}

		this.init = function () {
			this.initFilter();

			rect = canvas.svg.rect({
				fill: 'white',
				filter : 'url(#drop-shadow)',
				'pointer-events' : 'inherit'
			}).css({
				'cursor' : 'pointer'
			});

			canvas.appendToGroup(rect);

			this.initSize();
		}

		this.setSize = function (width, height) {
			canvas.setCanvasSize(width, height);

			this.initSize();
		}

		this.initSize = function () {
			var size = canvas.getCanvasSize();
			var width = canvas.chart.area('width');
			var height = canvas.chart.area('height');

			rect.attr({
				x: width / 2 - size.width / 2,
				y: height / 2 - size.height / 2,
				width: size.width,
				height: size.height
			});
		}

	};


	return DrawingRenderCanvas;
}, "drawing.core");

