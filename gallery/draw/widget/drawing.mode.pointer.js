jui.define("util.mode.pointer", ["util.base", "util.parser.path"], function (_, PathParser) {
    var DrawingModePointer = function (canvas) {

		var disabled = false;
		var parser = new PathParser();
		var selectElement = null;
		var seg;
		var events;
		var showedSegmentList = [];

		this.init = function () {
			seg = canvas.svg.g({
				className : "seg"
			});

			canvas.appendToGroup(seg);
		}

		// mode 가 변경될 때 초기 상태로 되돌린다.
		this.initMode = function () {
			var self = this;
			// 비활성화 일 때 초기 상태로 되돌림
			if (this.disabled)
			{
				if (events) {
					canvas.offMouseEvent(events);
				}


				seg.element.innerHTML = "";

			}
			// 활성화 모드
			else {
				events = canvas.setMouseEvent( function click(e) { self.dragStart(e); },  function move(e) { self.drag(e); },  function up(e) { self.dragEnd(e); } );
			}
		}

		this.drag = function (e) {
			if (disabled) return;

			if (selectElement) 	{
				var pos = canvas.pos(e);
				var index = selectElement.getAttribute("index");
				var type = selectElement.getAttribute("type");
				var line = selectElement.line;

				var seg = parser.getSegments(index);

				if (type) {
					if (seg.command == 'S') {
						if (type == 'curve') {
							seg.values[0] = pos.x;
							seg.values[1] = pos.y;
						} else {
							seg.values[2] = pos.x;
							seg.values[3] = pos.y;
						}
						line.MoveTo(seg.values[0], seg.values[1]);
						line.LineTo(seg.values[2], seg.values[3]);
						line.join();
					} else if (seg.command == 'C') {
						if (type == 'curve') {
							seg.values[0] = pos.x;
							seg.values[1] = pos.y;

							var prev = parser.getSegments(index-1);

							line.MoveTo(prev.values[prev.values.length-2], prev.values[prev.values.length-1]);
							line.LineTo(seg.values[0], seg.values[1]);
							line.join();
						} else if (type == 'curve-end') {
							seg.values[2] = pos.x;
							seg.values[3] = pos.y;
							line.MoveTo(seg.values[2], seg.values[3]);
							line.LineTo(seg.values[4], seg.values[5]);
							line.join();
						} else  {
							seg.values[4] = pos.x;
							seg.values[5] = pos.y;

							line.MoveTo(seg.values[2], seg.values[3]);
							line.LineTo(seg.values[4], seg.values[5]);
							line.join();

							//TODO: 다음 시점의 line 을 이동해야한다
							// TODO: 다음 시점이 curve 일 때만 이동한다

							var next = parser.getSegments(index+1);

							if (next.command == 'C') {
								//showedSegmentList[index+1];
							}

						}


					}

					selectElement.setAttribute('cx', pos.x);
					selectElement.setAttribute('cy', pos.y);

				} else {
					seg.values[0] = pos.x;
					seg.values[1] = pos.y;

					selectElement.setAttribute('cx', pos.x);
					selectElement.setAttribute('cy', pos.y);
				}

				parser.update()

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

		this.updateSegments = function (s) {
			parser.update();
		}

		this.createSegment = function (o) {
			return canvas.svg.circle(_.extend({
				className : 'segment',
				fill : 'white',
				stroke : 'blue',
				r : 5
			}, o || {}));
		};


		this.showSegment = function (s) {

			// TODO: element.removeChildren()  이 필요하다.
			seg.children = [] ;
			var clone = seg.element.cloneNode(false);
			seg.element.parentNode.replaceChild(clone, seg.element);
			seg.element = clone;

			 s = s || [] ;
			showedSegmentList = [];

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

					showedSegmentList[i] = [circle];
				} else if (segment.command == 'L') {
					var circle = this.createSegment({
						index : i,
						stroke : 'blue',
						cx : segment.values[0],
						cy : segment.values[1]
					});

					seg.append(circle);
					seg.element.appendChild(circle.element);
					showedSegmentList[i] = [circle];
				} else if (segment.command == 'S') {

					var line = canvas.svg.path({
						stroke : 'blue',
						'stroke-dasharray' : '5 5',
						'stroke-width' : 1
					});

					line.MoveTo(segment.values[0], segment.values[1]);
					line.LineTo(segment.values[2], segment.values[3]);
					line.join();

					seg.append(line);
					seg.element.appendChild(line.element);


					var circle = this.createSegment({
						index : i,
						stroke : 'red',
						type : 'curve',
						cx : segment.values[0],
						cy : segment.values[1]
					});

					circle.element.line = line;

					seg.append(circle);
					seg.element.appendChild(circle.element);

					var circle2 = this.createSegment({
						index : i,
						stroke : 'blue',
						type : 'pointer',
						cx : segment.values[2],
						cy : segment.values[3]
					});

					circle2.element.line = line;

					seg.append(circle2);
					seg.element.appendChild(circle2.element);

					showedSegmentList[i] = [circle, circle2, line];

				} else if (segment.command == 'C') {

					var line = canvas.svg.path({
						stroke : 'blue',
						'stroke-dasharray' : '5 5',
						'stroke-width' : 1
					});

					line.MoveTo(segment.values[2], segment.values[3]);
					line.LineTo(segment.values[4], segment.values[5]);
					line.join();

					seg.append(line);
					seg.element.appendChild(line.element);

					var line2 = canvas.svg.path({
						stroke : 'blue',
						'stroke-dasharray' : '5 5',
						'stroke-width' : 1
					});

					var prev = s[i-1];

					line2.MoveTo(prev.values[prev.values.length-2], prev.values[prev.values.length-1]);
					line2.LineTo(segment.values[0], segment.values[1]);
					line2.join();

					seg.append(line2);
					seg.element.appendChild(line2.element);

					var circle = this.createSegment({
						index : i,
						stroke : 'red',
						type : 'curve',
						cx : segment.values[0],
						cy : segment.values[1]
					});

					circle.element.line = line2;

					seg.append(circle);
					seg.element.appendChild(circle.element);

					var circle2 = this.createSegment({
						index : i,
						stroke : 'green',
						type : 'curve-end',
						cx : segment.values[2],
						cy : segment.values[3]
					});
					circle2.element.line = line;

					seg.append(circle2);
					seg.element.appendChild(circle2.element);

					var circle3 = this.createSegment({
						index : i,
						stroke : 'blue',
						type : 'pointer',
						cx : segment.values[4],
						cy : segment.values[5]
					});

					circle3.element.line = line;
					circle3.element.line2 = line2;

					seg.append(circle3);
					seg.element.appendChild(circle3.element);

					showedSegmentList[i] = [circle, circle2, circle3, line, line2];
				}
			}

		}

    };


    return DrawingModePointer;
}, "drawing.core");

