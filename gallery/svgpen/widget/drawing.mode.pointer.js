jui.define("util.mode.pointer", ["util.base", "util.parser.path"], function (_, PathParser) {
	var DrawingModePointer = function (canvas) {

		this.canvas = canvas;
		var parser = new PathParser();
		var selectElement = null;
		var seg;
		var segPath;
		var events;
		var showedSegmentList = [];

		this.init = function () {

			segPath = this.canvas.svg.g({
				className : "seg-path"
			});

			this.canvas.appendToGroup(segPath);

			seg = this.canvas.svg.g({
				className : "seg"
			});

			this.canvas.appendToGroup(seg);
		}

		// mode 가 변경될 때 초기 상태로 되돌린다.
		this.initMode = function () {
			var self = this;
			// 비활성화 일 때 초기 상태로 되돌림
			if (this.disabled)
			{
				if (events) {
					this.canvas.offMouseEvent(events);
				}


				seg.element.innerHTML = "";
				segPath.element.innerHTML = "";

			}
			// 활성화 모드
			else {
				events = this.canvas.setMouseEvent( function click(e) { self.dragStart(e); },  function move(e) { self.drag(e); },  function up(e) { self.dragEnd(e); } );
			}
		}

		this.drag = function (e) {
			if (selectElement) 	{
				var pos = this.canvas.pos(e);
				var index = selectElement.getAttribute("index");
				var type = selectElement.getAttribute("type");

				var segment = parser.getSegments(index);

				if (type) {
					if (segment.command == 'S') {
						if (type == 'curve') {
							segment.values[0] = pos.x;
							segment.values[1] = pos.y;
						} else {
							segment.values[2] = pos.x;
							segment.values[3] = pos.y;
						}
					} else if (segment.command == 'C') {
						if (type == 'curve') {
							segment.values[0] = pos.x;
							segment.values[1] = pos.y;
						} else if (type == 'curve-end') {
							segment.values[2] = pos.x;
							segment.values[3] = pos.y;
						} else  {
							segment.values[4] = pos.x;
							segment.values[5] = pos.y;
						}
					}

					selectElement.setAttribute('cx', pos.x);
					selectElement.setAttribute('cy', pos.y);

				} else {
					segment.values[0] = pos.x;
					segment.values[1] = pos.y;

					selectElement.setAttribute('cx', pos.x);
					selectElement.setAttribute('cy', pos.y);
				}

				parser.update();
				this.showSegmentLine(parser.getSegments());

			}
		}

		this.dragStart = function (e) {
			this.parsingElement(e.target, e);
		}

		this.dragEnd = function (e) {
			if (selectElement) 	{
				selectElement = null;
			}
		}

		this.parsingElement = function (el, e) {
			if (el.getAttribute('className') == 'segment') {

				if (e.ctrlKey) {

					var index = el.getAttribute('index');
					var s = parser.getSegments(index);

					if (s.command == 'M') {
						var next = parser.getSegments(index + 1);

						next.command = 'M';
						parser.setSegments(index+1, next);
					}

					parser.setSegments(index, null);
					this.updateSegments();
					el.parentNode.removeChild(el);
				} else {
					selectElement = el;
				}

			} else if (el.nodeName == 'path') {

				parser.init(el);
				this.showSegment(parser.getSegments());
			} else {
				this.showSegment(null);
			}
		}

		this.externalShowSegment = function (el) {
			parser.init(el);
			this.showSegment(parser.getSegments());
		}

		this.updateSegments = function (s) {
			parser.update();
		}

		this.createSegment = function (o) {
			return this.canvas.svg.circle(_.extend({
				className : 'segment',
				fill : 'white',
				'fill-opacity' : 0.9,
				stroke : 'blue',
				r : 5
			}, o || {}));
		};


		this.showSegmentLine = function (s) {

			// TODO: element.removeChildren()  이 필요하다
			segPath.children = [] ;
			var clone = segPath.element.cloneNode(false);
			segPath.element.parentNode.replaceChild(clone, segPath.element);
			segPath.element = clone;

			s = s || [] ;

			for(var i = 0, len = s.length ; i < len; i++) {
				var segment = s[i];
				if (segment.command == 'S') {

					var line = this.canvas.svg.path({
						stroke : 'blue',
						'stroke-dasharray' : '5 5',
						'stroke-width' : 1
					});

					line.MoveTo(segment.values[0], segment.values[1]);
					line.LineTo(segment.values[2], segment.values[3]);
					line.join();

					segPath.append(line);
					segPath.element.appendChild(line.element);


				} else if (segment.command == 'C') {

					var line = this.canvas.svg.path({
						stroke : 'blue',
						'stroke-dasharray' : '5 5',
						'stroke-width' : 1
					});

					line.MoveTo(segment.values[2], segment.values[3]);
					line.LineTo(segment.values[4], segment.values[5]);
					line.join();

					segPath.append(line);
					segPath.element.appendChild(line.element);

					var line2 = this.canvas.svg.path({
						stroke : 'blue',
						'stroke-dasharray' : '5 5',
						'stroke-width' : 1
					});

					var prev = s[i-1];

					line2.MoveTo(prev.values[prev.values.length-2], prev.values[prev.values.length-1]);
					line2.LineTo(segment.values[0], segment.values[1]);
					line2.join();

					segPath.append(line2);
					segPath.element.appendChild(line2.element);

				}
			}

		}


		this.showSegment = function (s) {

			this.showSegmentLine(s);

			// TODO: element.removeChildren()  이 필요하다.
			seg.children = [] ;
			var clone = seg.element.cloneNode(false);
			seg.element.parentNode.replaceChild(clone, seg.element);
			seg.element = clone;

			s = s || [] ;
			for(var i = 0, len = s.length ; i < len; i++) {
				var segment = s[i];
				if (segment.command == 'M') {
					var circle = this.createSegment({
						index : i,
						stroke : 'red',
						cx : segment.values[0],
						cy : segment.values[1]
					});

					seg.append(circle);
					seg.element.appendChild(circle.element);

				} else if (segment.command == 'L') {
					var circle = this.createSegment({
						index : i,
						stroke : 'blue',
						cx : segment.values[0],
						cy : segment.values[1]
					});

					seg.append(circle);
					seg.element.appendChild(circle.element);

				} else if (segment.command == 'S') {

					var circle = this.createSegment({
						index : i,
						stroke : 'red',
						type : 'curve',
						cx : segment.values[0],
						cy : segment.values[1]
					});

					seg.append(circle);
					seg.element.appendChild(circle.element);

					var circle2 = this.createSegment({
						index : i,
						stroke : 'blue',
						type : 'pointer',
						cx : segment.values[2],
						cy : segment.values[3]
					});

					seg.append(circle2);
					seg.element.appendChild(circle2.element);

				} else if (segment.command == 'C') {

					var circle = this.createSegment({
						index : i,
						stroke : 'red',
						type : 'curve',
						cx : segment.values[0],
						cy : segment.values[1]
					});

					seg.append(circle);
					seg.element.appendChild(circle.element);

					var circle2 = this.createSegment({
						index : i,
						stroke : 'green',
						type : 'curve-end',
						cx : segment.values[2],
						cy : segment.values[3]
					});

					seg.append(circle2);
					seg.element.appendChild(circle2.element);

					var circle3 = this.createSegment({
						index : i,
						stroke : 'blue',
						type : 'pointer',
						cx : segment.values[4],
						cy : segment.values[5]
					});

					seg.append(circle3);
					seg.element.appendChild(circle3.element);

				}
			}

		}


	};


	return DrawingModePointer;
}, "drawing.core");

