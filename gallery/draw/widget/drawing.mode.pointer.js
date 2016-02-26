jui.define("util.mode.pointer", ["util.parser.path"], function (PathParser) {
    var DrawingModePointer = function (canvas) {
		
		var disabled = false; 
		var parser = new PathParser();
		var selectElement = null;
		var seg;
		var events;

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
				var x = e.clientX - canvas.getDistX();
				var y = e.clientY - canvas.getDistY();

				var seg = parser.getSegments(selectElement.getAttribute("index"));
				seg.values = [x, y];

				parser.update()
				selectElement.setAttribute('cx', x);
				selectElement.setAttribute('cy', y);
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


		this.showSegment = function (s) {

			// TODO: element.removeChildren()  이 필요하다.
			seg.children = [] ;
			var clone = seg.element.cloneNode(false);
			seg.element.parentNode.replaceChild(clone, seg.element);
			seg.element = clone;

			 s = s || [] ;

			for(var i = 0, len = s.length ; i < len; i++) {
				var segment = s[i];
				if (segment.command == 'M') {
					var circle = canvas.svg.circle({
						className : 'segment',
						index : i,
						fill : 'transparent',
						stroke : 'red',
						cx : segment.values[0],
						cy : segment.values[1],
						r : 5
					});

					seg.append(circle);
					seg.element.appendChild(circle.element);
				} else if (segment.command == 'L') {
					var circle = canvas.svg.circle({
						className : 'segment',
						index : i,
						fill : 'transparent',
						stroke : 'blue',
						cx : segment.values[0],
						cy : segment.values[1],
							r : 5
					});

					seg.append(circle);
					seg.element.appendChild(circle.element);
				}
			}

		}
  
    };


    return DrawingModePointer;
}, "drawing.core");

