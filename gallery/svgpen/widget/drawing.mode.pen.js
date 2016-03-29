jui.define("util.mode.pen", ["util.parser.path"], function (PathParser) {
	var DrawingModePen = function (canvas) {

		var parser = new PathParser();
		var currentPen = [];
		var events;

		this.init = function () {

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

			}
			// 활성화 모드
			else {
				events = canvas.setMouseEvent( function click(e) { self.dragStart(e); },  function move(e) { self.drag(e); },  function up(e) { self.dragEnd(e); } );
			}
		}

		this.drag = function (e) {
			currentPen.push( canvas.pos(e));
			this.drawCurrentPen();
		}

		this.dragStart = function (e) {
			currentPen = [canvas.pos(e)];

			currentPath = canvas.svg.path({
				className : 'item',
				fill: 'transparent',
				stroke: 'black',
				'stroke-width': 3,
				'stroke-linejoin': 'round'
			}).css({
				'pointer-events': 'visibleStroke'
			});
			canvas.appendToCanvas(currentPath);
		}

		this.dragEnd = function (e) {
			currentPen.push( canvas.pos(e));

			this.drawCurrentPen(true);
			this.drawEnd();
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


	return DrawingModePen;
}, "drawing.core");
