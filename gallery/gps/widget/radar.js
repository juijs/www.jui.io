jui.define("chart.widget.radar", ["util.math"], function(math) {

	var Radar = function () {
		var g, guide, line, tail;
		var circle, circle2, circle3;
		var angle = 0;
		var tail_length = 50;
		var tail_size = 5;
		var linear;
		var self = this;

		this.drawBefore = function () {
			g = this.svg.g({
				'class' : 'radar'
			});


			guide = this.svg.g({
				'class' : 'radar-guide'
			});

			g.append(guide);


			linear = this.svg.linearGradient({
				id : "grad1",
				x1 : "0%",
				y1 : "0%",
				x2 : "100%",
				y2 : "0%"
			});
			linear.append(this.svg.stop({
				offset : "0%",
				'stop-color' : 'rgba(255, 255, 255, 0.5)',
				'stop-opacity' : 1
			}));
			linear.append(this.svg.stop({
				offset : "100%",
				'stop-color' : 'rgba(255, 255, 255, 0.01)',
				'stop-opacity' : 1
			}));

			line = this.svg.path({
				'stroke-width' : 0,
				'stroke' : '#fff',
				'fill' : 'url(#grad1)'
			});

			guide.append(line)

			tail = this.svg.path({
				'fill' : this.chart.color('linear(left) #fff,20% #fff,100% black'),
				'fill-opacity' : 0.1,
				'stroke-width' : 0,
				'stroke' : 'transparent'
			});

			//guide.append(tail);

			circle = this.svg.circle({
				fill : "#fff",
				"fill-opacity": 0.7,
				stroke : '#fff',
				cx : 0,
				cy : 0,
				r : 10
			});

			guide.append(circle);

			circle2 = this.svg.circle({
				fill : "#fff",
				cx : 0,
				cy : 0,
				r : 4
			});

			guide.append(circle2);

			circle3 = this.svg.circle({
				stroke : "rgba(255, 255, 255, 0.5)",
				"stroke-width" : 2,
				fill : 'transparent',
				cx : 0,
				cy : 0,
			});

			g.append(circle3);

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

		this.draw = function () {
			var w= this.axis.area('width');
			var h = this.axis.area('height');

			var r = Math.min(w, h)/2;

			this.chart.appendDefs(linear);

			var startPosX = w/2 + this.chart.padding('left');
			var startPosY = h/2 + this.chart.padding('top');

			guide.translate(startPosX, startPosY);

			self.updateTail();

			circle3.attr({
				r : r,
				cx : startPosX,
				cy : startPosY
			})

			clearInterval(window.timer);
			window.timer = setInterval(function() {

				angle = angle + 0.7;

				if (angle >= 360)
				{
					angle = 0;
				}

				self.updateGuide();

			}, 1000/60);


			return g;
		}
	}

	return Radar;

}, "chart.widget.core");/**
 * Created by alvin on 2016-03-29.
 */
