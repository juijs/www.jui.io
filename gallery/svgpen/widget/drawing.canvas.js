jui.define("chart.widget.drawing.canvas", [
	"util.render.canvas",
	"util.render.rule",
	"util.parser.path",
	"util.mode.pointer",
	"util.mode.pen",
	"util.mode.pen2",
	"util.mode.move"
], function (
	RenderCanvas, RenderRule,
	PathParser, ModePointer, ModePen, ModePen2, ModeMove
) {
	var DrawingCanvas = function () {

		var group;
		var pathArea;

		var currentMode = "pointer";
		var distX = 50;
		var distY = 30;
		var canvasWidth = 800;
		var canvasHeight = 800;

		var renderCanvas = new RenderCanvas(this);
		var renderRule = new RenderRule(this);

		var modeConfig = {

			/**
			 *  객체를 가리킨다.  마우스 포인트에 맞는 객체를 선택할 수 있을까?
			 */
			pointer : new ModePointer(this),

			/**
			 * 객체를 움직인다, 크기를 조절한다.  회전을 준다.
			 *
			 */
			move : new ModeMove(this),
			plus : '',
			minus : '',
			polygon : '',

			// 그림을 그린다.
			pen : new ModePen(this),

			// 커브를 그린다.
			pen2 : new ModePen2(this)
		};

		this.getCanvasSize = function () {
			return { width : canvasWidth, height : canvasHeight };
		}

		this.setCanvasSize = function (w, h) {
			canvasWidth = w;
			canvasHeight = h;

			renderCanvas.initSize();
			renderRule.initSize();
		}

		this.getDistX = function () {
			return distX;
		}

		this.getDistY = function () {
			return distY;
		}



		this.drawBefore = function () {
			group = this.svg.g();

			// 그리기 객체 초기화
			renderCanvas.init();
			renderRule.init();

			// 그릴 수 있는 path 영역 설정
			this.initPathArea();

			// 이벤트 설정
			this.initEvent();

			// 모드 설정
			this.initMode();
		}

		this.initPathArea = function () {
			pathArea = this.svg.g({
				className : "path-area"
			});

			group.append(pathArea);
		}

		this.appendToGroup = function (el) {
			group.append(el);
		}

		this.initEvent = function () {
			var self = this;
			this.chart.on('drawing.canvas.change.mode', function (mode) {
				self.setMode(mode);
			});
		}

		this.initMode = function () {

			for(var k in modeConfig) {
				var mode = modeConfig[k];

				if (mode) {
					mode.init();
				}
			}

			this.setMode('pointer');
		}

		this.setMode = function (mode) {

			if (currentMode != mode)
			{
				modeConfig[currentMode].setDisabled(true);
			}

			currentMode = mode;
			modeConfig[currentMode].setDisabled(false);


		}

		this.getMode = function (mode) {
			return modeConfig[mode] || {};
		}


		this.pos = function (e) {
			return {
				x : e.clientX - distX,
				y : e.clientY - distY
			}
		}

		this.appendToCanvas = function (elem) {
			pathArea.element.appendChild(elem.element);
		}

		this.setMouseEvent = function (mousedown, mousemove, mouseup) {
			var self = this;
			function de(downEvent) {
				mousedown.call(self, downEvent);

				self.chart.on('chart.mousemove', me);
				self.chart.on('chart.mouseup', ue);
			}

			function me(moveEvent) {
				mousemove.call(self, moveEvent);
			}

			function ue(upEvent) {
				mouseup.call(self, upEvent);
				self.chart.off(me);
				self.chart.off(ue);
			}

			this.chart.on('chart.mousedown', de);

			return { mousedown : de, mousemove : me, mouseup : ue };
		}

		this.offMouseEvent = function (event) {
			this.chart.off(event.mousedown);
		}

		this.draw = function () {

			return group;
		}

	};

	DrawingCanvas.setup = function () {
		return {

		};
	};

	return DrawingCanvas;
}, "chart.widget.core");
