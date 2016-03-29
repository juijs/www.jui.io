jui.define("util.mode.shape", [], function () {
	var DrawingModeShape = function (canvas) {

		var disabled = false;
		var startPosition = {};
		var currentPosition = {};
		var currentShape = null;
		var shapeArea
		var events;

		this.init = function () {
			shapeArea = canvas.svg.g({
				className : "shape-area"
			});

			canvas.appendToGroup(shapeArea);
		}

		// mode 가 변경될 때 초기 상태로 되돌린다.
		this.initMode = function () {
			var self = this;
			// 비활성화 일 때 초기 상태로 되돌림
			if (disabled)
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
			if (disabled) return;

			// 구현 해야함.
			currentPosition = canvas.getMousePosition(e);

			this.showShape();
		}

		this.makeGuide = function () {
			var distX = Math.abs(startPosition.x - currentPosition.x);
			var distY = Math.abs(startPosition.y - currentPosition.y);

			var leftTop = { x : startPosition.x - distX, y : startPosition.y - distY };
			var rightTop = { x : startPosition.x + distX, y : startPosition.y - distY };
			var leftBottom = { x : startPosition.x - distX, y : startPosition.y + distY };
			var rightBottom = { x : startPosition.x + distX, y : startPosition.y + distY };

			currentShape.MoveTo(leftTop.x, leftTop.y);
			currentShape.LineTo(rightTop.x, rightTop.y);
			currentShape.LineTo(rightBottom.x, rightBottom.y);
			currentShape.LineTo(leftBottom.x, leftBottom.y);
			currentShape.ClosePath();
		}

		this.showShape = function () {
			this.makeGuide();
			currentShape.join();
		}

		this.getShape = function () {
			var path = canvas.svg.path({
				className : 'item',
				fill: 'transparent',
				stroke : 'black',
				'stroke-width' : 1,
				'stroke-dasharray' : '5 5'
			});

			return path;

		}

		this.dragStart = function (e) {
			if (disabled) return;

			startPosition = canvas.getMousePosition(e);
			currentShape = this.getShape();

			shapeArea.append(currentShape);
			shapeArea.element.appendChild(currentShape.element);
		}


		this.dragEnd = function (e) {
			if (disabled) return;

			shapeArea.element.innerHTML = "";
		}




		this.setDisabled = function (value) {
			disabled = value;

			this.initMode();
		}

		this.getDisabled = function () {
			return !!disabled;
		}

	};


	return DrawingModeShape;
});
