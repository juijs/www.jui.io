jui.define("chart.widget.compass", [ "util.math" ], function(math) {

	var CompassWidget = function () {
		var g, guide, line, tail, line2;
		var circle;
		var angle = 0;

		this.drawBefore = function () {
			g = this.svg.g({
				'class' : 'radar2'
			});


			guide = this.svg.g({
				'class' : 'radar-guide'
			});

			g.append(guide);


			var linear = this.svg.linearGradient({
				id : "grad2",
				x1 : "0%",
				y1 : "100%",
				x2 : "0%",
				y2 : "0%"
			});
			linear.append(this.svg.stop({
				offset : "0%",
				'stop-color' : 'rgba(255, 255, 255, 0.2)',
				'stop-opacity' : 1
			}));
			linear.append(this.svg.stop({
				offset : "100%",
				'stop-color' : 'rgba(255, 255, 255, 0.01)',
				'stop-opacity' : 1
			}));

			this.chart.appendDefs(linear);

			line = this.svg.path({
				'stroke-width' : 0,
				'stroke' : '#fff',
				'fill' : 'url(#grad2)'
			});

			guide.append(line)

			line2 = this.svg.path({
				'stroke-width' : 1,
				'stroke' : '#fff',
				'stroke-opacity': 0.5,
				'fill' : 'transparent'
			});

			guide.append(line2)

			tail = this.svg.path({
				'fill' : this.chart.color('linear(left) #fff,20% #fff,100% black'),
				'fill-opacity' : 0.1,
				'filter' : 'url(#blurFilter)',
				'stroke-width' : 0,
				'stroke' : 'transparent'
			});

			//guide.append(tail);

			circle = this.svg.circle({
				fill : "transparent",
				stroke : '#fff',
				'stroke-width' : 12
			});

			g.append(circle);

		}

		this.updateGuide = function () {

			guide.rotate(angle);

		}

		this.updateTail = function () {

			var w= this.axis.area('width');
			var h = this.axis.area('height');

			var r = Math.min(w, h)/2;

			line.MoveTo(0, 0);
			line.lineTo(0, r);

			// outer arc 에 대한 지점 설정
			var obj = math.rotate(0, r, math.radian(30));

			// arc 그림
			line.Arc(r, r, 0, 0, 1, obj.x, obj.y);

			line.join();
		}

		this.drawCircle = function () {
			var w= this.chart.area('width');
			var h = this.chart.area('height');

			var r = Math.min(w, h)/2 - 40;

			var len = 2 * Math.PI * r;
			var unitLength = len/8;

			var lineCount = 6;
			var firstLine = 3;
			var secondLine = 1;
			var emptyLength = (unitLength - (secondLine * (lineCount-1) + firstLine)) /lineCount;



			var arr = [ firstLine,emptyLength];

			for(var i = 1; i < lineCount; i++) {
				arr.push(secondLine)
				arr.push(emptyLength);
			}

			arr = arr.join(" ")

			circle.attr({
				r : r,
				cx : w / 2,
				cy : h / 2,
				'stroke-dasharray': arr
			}).rotate(-((firstLine+secondLine)/2)/ len * 360, w/2, h/2);



		}

		this.drawRange = function () {
			var w= this.chart.area('width');
			var h = this.chart.area('height');

			var r = Math.min(w, h)/2 - 50;

			var centerX = w/2;
			var centerY = h/2;


			var startPosX = w/2 + this.chart.padding('left');
			var startPosY = h/2 + this.chart.padding('top');

			guide.translate(startPosX, startPosY).rotate(-this.widget.degree + 250);

			line.MoveTo(0, 0);
			line.lineTo(0, r);

			// outer arc 에 대한 지점 설정
			var obj = math.rotate(0, r, math.radian(40));

			// arc 그림
			line.Arc(r, r, 0, 0, 1, obj.x, obj.y);
			line.join();

			line2.MoveTo(0, 0);
			line2.moveTo(0, r);
			line2.Arc(r, r, 0, 0, 1, obj.x, obj.y);
			line2.join();
		}

		this.drawText = function () {
			var w= this.chart.area('width');
			var h = this.chart.area('height');

			var r = Math.min(w, h)/2 - 40;

			var centerX = w/2;
			var centerY = h/2;
			var left = centerX - r;
			var right = centerX + r;
			var top = centerY  - r;
			var bottom = centerY + r;

			var dist = 25;

			g.append(this.chart.text({  'font-size': '14px', fill : '#ffffff', x : centerX, y : top - dist-5, 'text-anchor' : 'middle' ,'alignment-baseline' :"central"  }, 'N'));
			g.append(this.chart.text({  'font-size': '14px', fill : '#ffffff', x : centerX, y : bottom + dist+5, 'text-anchor' : 'middle' ,'alignment-baseline' :"central" }, 'S'));
			g.append(this.chart.text({  'font-size': '14px', fill : '#ffffff', x : right + dist, y : centerY, 'text-anchor' : 'start' ,'alignment-baseline' :"central" }, 'E'));
			g.append(this.chart.text({  'font-size': '14px', fill : '#ffffff', x : left - dist, y : centerY, 'text-anchor' : 'end' ,'alignment-baseline' :"central" }, 'W'));

			g.append(this.chart.text({  'font-size': '42px', fill : '#ffffff', x : centerX + 30, y : centerY, 'text-anchor' : 'end' ,'alignment-baseline' :"central" }, this.widget.title));
			g.append(this.chart.text({  'font-size': '12px', fill : '#ffffff', x : centerX + 30, y : centerY - 15, 'text-anchor' : 'start' ,'alignment-baseline' :"central" }, this.widget.supText));
			g.append(this.chart.text({  'font-size': '11px', fill : '#ffffff', x : centerX, y : centerY - 40, 'text-anchor' : 'middle' ,'alignment-baseline' :"central" }, this.widget.topText));
			g.append(this.chart.text({  'font-size': '11px', fill : '#ffffff', x : centerX, y : centerY + 40, 'text-anchor' : 'middle' ,'alignment-baseline' :"central" }, this.widget.bottomText));
		}

		this.drawArrow = function () {
			var w= this.chart.area('width');
			var h = this.chart.area('height');

			var r = Math.min(w, h)/2 - 40;

			var centerX = w/2;
			var centerY = h/2;
			var left = centerX - r;
			var right = centerX + r;
			var top = centerY  - r;
			var bottom = centerY + r;


			var triangle = this.svg.path({
				fill : 'red'
			});

			var height = 8;
			var width = 8;

			// FIXME: pathSymbol 내부구조를 고쳐야함
			triangle.MoveTo(centerX, top -14).moveTo(0, -height/2).lineTo(width/2,height).lineTo(-width, 0).lineTo(width/2, -height);
			triangle.join();

			g.append(triangle);
		}

		this.draw = function () {
			this.drawCircle();
			this.drawRange();
			this.drawText();
			this.drawArrow();

			return g;
		}
	}

	CompassWidget.setup = function() {
		return {
			degree : 255,
			title : "10.2",
			topText : "255° WSW",
			supText : "mph",
			bottomText : "WIND GUST 10.4mph"
		}
	}

	return CompassWidget;

}, "chart.widget.core");
