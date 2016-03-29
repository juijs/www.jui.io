jui.define("util.mode.move", ["util.parser.path"], function (PathParser) {
	var DrawingModeMove = function (canvas) {

		var disabled = false;
		var parser = new PathParser();
		var guidRect;
		var guidRectWidth = 8;
		var guidRectPoint = guidRectWidth/ 2;

		var moveElement;
		var moveDirection = "";
		var moveStart = [];
		var events;

		this.init = function () {
			guidRect = canvas.svg.g({
				className: "guid-rect"
			});

			canvas.appendToGroup(guidRect);
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

				guidRect.element.innerHTML = "";

			}
			// 활성화 모드
			else {
				events = canvas.setMouseEvent( function click(e) { self.dragStart(e); },  function move(e) { self.drag(e); },  function up(e) { self.dragEnd(e); } );
			}
		}

		this.drag = function () {
			// 구현 해야함.
		}

		this.dragStart = function (e) {
			this.clickElement(e.target, e);
		}


		this.clickElement = function (el, e) {
			var className = el.getAttribute('className');
			if (className == 'item') {
				this.showMovePoint(el);
			} else if (className.indexOf('move-segment-') > -1) {
				moveElement = el;
				moveDirection = className.replace('move-segment-', '');
				moveStart = [e.clientX, e.clientY];
			}
		}


		this.createGuidRect = function (obj) {
			obj.width = guidRectWidth;
			obj.height = guidRectWidth;
			obj.fill = '#4F80FF';
			obj.stroke = 'rgba(0,0,0,0)';
			obj['stroke-width'] = 2;
			return canvas.svg.rect(obj);
		}

		this.getY = function (y) {
			return y - guidRectPoint - canvas.getDistY();
		}

		this.getX = function (x) {
			return x - guidRectPoint - canvas.getDistX();
		}

		this.append  = function (parent, child) {
			parent.append(child)
			parent.element.appendChild(child.element);
		}

		this.showMovePoint = function (el) {

			var rect = el.getBoundingClientRect();

			var fullRect = canvas.svg.rect({
				className : 'move-segment',
				x : rect.left - canvas.getDistX(),
				y : rect.top - canvas.getDistY(),
				width : rect.width,
				height: rect.height,
				fill : 'transparent',
				stroke : '#4F80FF'
			});

			guidRect.append(fullRect)
			guidRect.element.appendChild(fullRect.element);


			var leftTop = this.createGuidRect({ className : 'move-segment-left-top', x : this.getX(rect.left), y : this.getY(rect.top)   });
			var rightTop = this.createGuidRect({ className : 'move-segment-right-top', x : this.getX(rect.right), y : this.getY(rect.top)   });
			var leftBottom = this.createGuidRect({ className : 'move-segment-left-bottom', x : this.getX(rect.left), y : this.getY(rect.bottom)   });
			var rightBottom = this.createGuidRect({ className : 'move-segment-right-bottom', x : this.getX(rect.right), y : this.getY(rect.bottom)  });

			var left = this.createGuidRect({ className : 'move-segment-left', x : this.getX(rect.left), y : this.getY(rect.top + rect.height/2)   });
			var right = this.createGuidRect({ className : 'move-segment-right', x : this.getX(rect.right), y : this.getY(rect.top + rect.height/2)   });
			var top = this.createGuidRect({ className : 'move-segment-top', x : this.getX(rect.left + rect.width/2), y : this.getY(rect.top)   });
			var bottom = this.createGuidRect({ className : 'move-segment-bottom', x : this.getX(rect.left + rect.width/2), y : this.getY(rect.bottom)   });

			this.append(guidRect, leftTop);
			this.append(guidRect, rightTop);
			this.append(guidRect, leftBottom);
			this.append(guidRect, rightBottom);
			this.append(guidRect, left);
			this.append(guidRect, right);
			this.append(guidRect, top);
			this.append(guidRect, bottom);

		}

		this.dragEnd = function (e) {
			moveElement = null;
			moveDirection = "";
			moveStart = [];
		}

		this.drawCurrentPen = function (isEnd) {
			for(var i = 0, len=  currentPen.length; i < len; i++) {
				var pen = currentPen[i];
				if (i == 0) {
					currentPath.MoveTo(pen.x, pen.y);
				} else {
					currentPath.LineTo(pen.x, pen.y);
				}
			}

			if (isEnd) {
				//currentPath.ClosePath();
			}
			currentPath.join(true);
		}

		this.drawEnd = function () {

			currentPath = null;
			currentPen = [];
		}


	};


	return DrawingModeMove;
}, "drawing.core");
