jui.define("chart.widget.drawing.canvas", ["util.parser.path"], function (PathParser) {
    var DrawingCanvas = function () {

        var group;
        var rect;
		var pathArea;
		var seg;
		var guidRect
        var canvasWidth = 800;
        var canvasHeight = 800;
        var ruleBase = 50;
        var ruleSize = 15;
        var ruleSizeV = 30;
		var currentMode = "pointer";
		var drawObjects = [];
		var distX = 50;
		var distY = 30;

		var currentPen = [];
		var currentMode = 'pen';
		var currentSegments;
		var selectSegment = true;
		var selectElement;

		var parser = new PathParser();

		var modeConfig = {

			/**
              *  객체를 가리킨다.  마우스 포인트에 맞는 객체를 선택할 수 있을까?
			  */
			pointer : '',

            /**
			  * 객체를 움직인다
			  *
			  */
			move : '',
            plus : '',
            minus : '',
			polygon : '',
            pen : ''
		};


        this.initFilter = function () {
            var filter = this.svg.filter({
                id : 'drop-shadow',
                height: '130%'
            });

            filter.append(this.svg.feGaussianBlur({
                in : "SourceAlpha",
                stdDeviation : 5,
                result : 'blur'
            }));

            filter.append(this.svg.feOffset({
                in : "blur",
                dx : 5,
                dy : 5,
                result : 'offsetBlur'
            }));

            var feMerge = this.svg.feMerge();
            filter.append(feMerge);

            feMerge.append(this.svg.feMergeNode({
                in : 'offsetBlur'
            }));

            feMerge.append(this.svg.feMergeNode({
                in : 'SourceGraphic'
            }));

            this.chart.appendDefs(filter);
        }

        this.drawBefore = function () {
            group = this.svg.g();

			// 모드 설정
			this.initMode();
            this.initCanvas();
            this.initRule();
			this.initEvent();
			this.initPathArea();
			this.initSegment();
			this.initGuidRect();
        }

		this.initPathArea = function () {
			pathArea = this.svg.g({
				className : "path-area"
			});

			group.append(pathArea);
		}


		this.initSegment = function () {
			seg = this.svg.g({
				className : "seg"
			});

			group.append(seg);
		}

		this.initGuidRect = function () {
			guidRect = this.svg.g({
				className: "guid-rect"
			});

			group.append(guidRect);
		}

		this.initEvent = function () {
			var self = this;
			this.chart.on('drawing.canvas.change.mode', function (mode) {
				self.setMode(mode);
			});
		}

		this.initMode = function () {
			this.setMode('pen');
		}

		this.setMode = function (mode) {
			currentMode = mode;
		}

        this.initCanvas = function () {

            this.initFilter();

            rect = this.svg.rect({
                fill: 'white',
                filter : 'url(#drop-shadow)',
                'pointer-events' : 'inherit'
            }).css({
				'cursor' : 'pointer'
			});


			this.setMouseEvent(rect,
				function click(e) {
					this.dragStart(e);
				}, function move(e) {
					this.drag(e);
				}, function up(e) {
					this.dragEnd(e);
				}
			);


            group.append(rect);


        }

		this.dragStart = function (e) {

			var y = e.clientY - distY;
			var x = e.clientX - distX;

			if (currentMode == 'pen') {
				currentPen = [{x: x, y: y}];

				currentPath = this.svg.path({
					className : 'item',
					fill: 'transparent',
					stroke: 'black',
					'stroke-width': 3,
					'stroke-linejoin': 'round'
				});
				this.appendToCanvas(currentPath);
			} else if (currentMode == 'move') {
				this.clickElement(e.target, e);
			} else if (currentMode == 'pointer') {
				this.parsingElement(e.target, e);
			}
		}

		this.clickElement = function (el, e) {
			if (el.getAttribute('className') == 'item') {
				this.showMovePoint(el);
			}
		}

		this.showMovePoint = function (el) {

			var rect = el.getBoundingClientRect();

			var fullRect = this.svg.rect({
				className : 'move-segment',
				x : rect.left - distX,
				y : rect.top - distY,
				width : rect.width,
				height: rect.height,
				fill : 'transparent',
				stroke : 'blue'
			});

			guidRect.append(fullRect)
			guidRect.element.appendChild(fullRect.element);

			var leftTop = this.svg.rect({ className : 'move-segment-left-top', x : rect.left - 5 - distX, y : rect.top - 5 - distY, width : 10, height : 10  });
			var rightTop = this.svg.rect({ className : 'move-segment-right-top', x : rect.left + rect.width - 5 - distX, y : rect.top - 5 - distY, width : 10, height : 10  });
			var leftBottom = this.svg.rect({ className : 'move-segment-left-bottom', x : rect.left - 5 - distX, y : rect.top + rect.height - 5 - distY, width : 10, height : 10  });
			var rightBottom = this.svg.rect({ className : 'move-segment-right-bottom', x : rect.left + rect.width - 5 - distX, y : rect.top + rect.height - 5 - distY, width : 10, height : 10  });

			guidRect.append(leftTop)
			guidRect.element.appendChild(leftTop.element);
			guidRect.append(rightTop)
			guidRect.element.appendChild(rightTop.element);
			guidRect.append(leftBottom)
			guidRect.element.appendChild(leftBottom.element);
			guidRect.append(rightBottom)
			guidRect.element.appendChild(rightBottom.element);

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
					this.updateSegments(currentSegments);
					el.parentNode.removeChild(el);
				} else {
					selectSegment = true;
					selectElement = el;
				}

			} else if (el.nodeName == 'path') {

				parser.init(el);
				this.showSegment(parser.getSegments());
			} else if (el.nodeName == 'rect') {
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
					var circle = this.svg.circle({
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
					var circle = this.svg.circle({
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

		this.drag = function (e) {
			var x = e.clientX - distX;
			var y = e.clientY - distY;

			if (selectSegment && selectElement) 	{
				var seg = parser.getSegments(selectElement.getAttribute("index"));
				seg.values = [x, y];

				parser.update()
				selectElement.setAttribute('cx', x);
				selectElement.setAttribute('cy', y);
			} else {
				currentPen.push( { x : x, y : y });
				this.drawCurrentPen();
			}
		}

		this.dragEnd = function (e) {
			var x = e.clientX - distX;
			var y = e.clientY - distY;

			if (selectSegment) 	{
				selectSegment = false;
				selectElement = null;
			} else  {
				currentPen.push( { x : x, y : y });

				this.drawCurrentPen(true);
				this.drawEnd();
			}

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

			drawObjects.push( { el : currentPath } );
			currentPath = null;
			currentPen = [];
		}

		this.appendToCanvas = function (elem) {
			pathArea.element.appendChild(elem.element);
		}

		this.setMouseEvent = function (element, mousedown, mousemove, mouseup) {
			var self = this;

			function de(downEvent) {
				mousedown.call(self, downEvent);

				if (currentMode == 'pen' || selectSegment){
					self.chart.on('chart.mousemove', me);
					self.chart.on('chart.mouseup', ue);
				}

			}

			function me(moveEvent) {
					mousemove.call(self, moveEvent);
			}

			function ue(upEvent) {
					mouseup.call(self, upEvent);
					self.chart.off('chart.mousemove', me);
					self.chart.off('chart.mouseup', ue);
			}

			this.chart.on('chart.mousedown', de);
		}

        this.initRule = function () {
            this.initRuleH();
            this.initRuleV();
        }

        this.initRuleH = function () {
            var ruleH = this.svg.g();

            var totalWidth = this.chart.area('width');

            var start = this.chart.area('width')/2 - canvasWidth/2;
            var start2 = start;

            ruleH.append(this.svg.line({
                x1 : ruleSizeV,
                y1 : ruleSize,
                x2 : totalWidth,
                y2 : ruleSize,
                stroke : '#656565'
            }));

            var point = 0;

            while(start < totalWidth) {
                var line = this.svg.line({
                    x1 : start,
                    y1 : 0,
                    x2 : start,
                    y2 : ruleSize,
                    stroke : '#656565'
                });
                ruleH.append(line);

                var text = this.chart.text({
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
                var line = this.svg.line({
                    x1 : start2,
                    y1 : 0,
                    x2 : start2,
                    y2 : ruleSize,
                    stroke : '#656565'
                });
                ruleH.append(line);

                var text = this.chart.text({
                    x: start2+2,
                    y: 9,
                    fill : '#656565',
                    "text-anchor": "start",
                    'font-size' : '11px'
                }, point2);

                ruleH.append(text);
            }


            group.append(ruleH);
        }

        this.initRuleV = function () {
            var ruleV = this.svg.g();

            var totalHeight = this.chart.area('height');

            var start = totalHeight/2 - canvasHeight/2;
            var start2 = start;

            ruleV.append(this.svg.line({
                x1 : ruleSizeV,
                y1 : ruleSize,
                x2 : ruleSizeV,
                y2 : totalHeight,
                stroke : '#656565'
            }));

            var point = 0;

            while(start < totalHeight) {
                var line = this.svg.line({
                    x1 : 0,
                    y1 : start,
                    x2 : ruleSizeV,
                    y2 : start,
                    stroke : '#656565'
                });
                ruleV.append(line);

                var text = this.chart.text({
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
                var line = this.svg.line({
                    x1 : 0,
                    y1 : start2,
                    x2 : ruleSizeV,
                    y2 : start2,
                    stroke : '#656565'
                });
                ruleV.append(line);

                var text = this.chart.text({
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


            group.append(ruleV);
        }

        this.setCanvasSize = function (width, height) {
            canvasWidth = width;
            canvasHeight = height;

            this.initCanvasSize();
        }

        this.initCanvasSize = function () {
            var width = this.chart.area('width');
            var height = this.chart.area('height');

            rect.attr({
                x: width / 2 - canvasWidth / 2,
                y: height / 2 - canvasHeight / 2,
                width: canvasWidth,
                height: canvasHeight
            });
        }


        this.draw = function () {


            this.initCanvasSize();

            return group;
        }

    };

    DrawingCanvas.setup = function () {
        return {

        };
    };

    return DrawingCanvas;
}, "chart.widget.core");
