jui.define("util.render.rule", [], function () {
	var DrawingRenderRule = function (canvas) {

		var ruleBase = 50;
		var ruleSize = 15;
		var ruleSizeV = 30;

		this.init = function () {
			this.initRule();
		}

		this.initRule = this.initSize = function () {
			this.initRuleH();
			this.initRuleV();
		}

		this.initRuleH = function () {
			var ruleH = canvas.svg.g();

			var totalWidth = canvas.chart.area('width');

			var size = canvas.getCanvasSize();

			var start = canvas.chart.area('width')/2 - size.width/2;
			var start2 = start;

			ruleH.append(canvas.svg.line({
				x1 : ruleSizeV,
				y1 : ruleSize,
				x2 : totalWidth,
				y2 : ruleSize,
				stroke : '#656565'
			}));

			var point = 0;

			while(start < totalWidth) {
				var line = canvas.svg.line({
					x1 : start,
					y1 : 0,
					x2 : start,
					y2 : ruleSize,
					stroke : '#656565'
				});
				ruleH.append(line);

				var text = canvas.chart.text({
					x: start+2,
					y: 9,
					fill : '#656565',
					"text-anchor": "start",
					'font-size' : '11px'
				}, point);

				ruleH.append(text);

				start += ruleBase;
				point += ruleBase;
			}

			var point2 = 0;
			while (start2 > ruleSizeV + ruleBase) {
				start2 -= ruleBase;
				point2 -= ruleBase;
				var line = canvas.svg.line({
					x1 : start2,
					y1 : 0,
					x2 : start2,
					y2 : ruleSize,
					stroke : '#656565'
				});
				ruleH.append(line);

				var text = canvas.chart.text({
					x: start2+2,
					y: 9,
					fill : '#656565',
					"text-anchor": "start",
					'font-size' : '11px'
				}, point2);

				ruleH.append(text);
			}


			canvas.appendToGroup(ruleH);
		}

		this.initRuleV = function () {
			var ruleV = canvas.svg.g();

			var totalHeight = canvas.chart.area('height');

			var size = canvas.getCanvasSize();

			var start = totalHeight/2 - size.height/2;
			var start2 = start;

			ruleV.append(canvas.svg.line({
				x1 : ruleSizeV,
				y1 : ruleSize,
				x2 : ruleSizeV,
				y2 : totalHeight,
				stroke : '#656565'
			}));

			var point = 0;

			while(start < totalHeight) {
				var line = canvas.svg.line({
					x1 : 0,
					y1 : start,
					x2 : ruleSizeV,
					y2 : start,
					stroke : '#656565'
				});
				ruleV.append(line);

				var text = canvas.chart.text({
					x: ruleSizeV-2,
					y: start + 10,
					fill : '#656565',
					"text-anchor": "end",
					'font-size' : '11px'
				}, point);

				ruleV.append(text);

				start += ruleBase;
				point += ruleBase;
			}

			var point2 = 0;
			start2 -= ruleBase;
			point2 -= ruleBase;

			while (start2 > ruleSize) {
				var line = canvas.svg.line({
					x1 : 0,
					y1 : start2,
					x2 : ruleSizeV,
					y2 : start2,
					stroke : '#656565'
				});
				ruleV.append(line);

				var text = canvas.chart.text({
					x: ruleSizeV-2,
					y: start2 + 10,
					fill : '#656565',
					"text-anchor": "end",
					'font-size' : '11px'
				}, point2);

				ruleV.append(text);

				start2 -= ruleBase;
				point2 -= ruleBase;

			}


			canvas.appendToGroup(ruleV);
		}


	};


	return DrawingRenderRule;
}, "drawing.core");

