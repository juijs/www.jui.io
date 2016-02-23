jui.define("chart.widget.drawing.canvas", [], function () {
    var DrawingCanvas = function () {

        var group;
        var rect;
		var pathArea;
		var seg;
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
		var parseRegForPath = /([mMlLvVhHcCsSqQtTaAzZ]([^mMlLvVhHcCsSqQtTaAzZ]*))/g;

		var modeConfig = {

			/**
              *  객체를 가리킨다.  마우스 포인트에 맞는 객체를 선택할 수 있을까? 
			  */
			pointer : '',

            /**
			  * 캔버스를 움직인다.  룰러도 같이 업데이트 되어야 한다. 
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

			if (currentMode == 'pen') {
				currentPen.push( { x : e.clientX, y : e.clientY });
				currentPath =  this.svg.path({
					fill : 'transparent',
					stroke : 'black',
					'stroke-width' : 3,
					'stroke-linejoin': 'round'
				});
				this.appendToCanvas(currentPath);
			} else if (currentMode == 'pointer') {
				this.parsingElement(e.target, e);
			}
		}

		this.parsingElement = function (el, e) {
			if (el.getAttribute('className') == 'segment') {	

				if (e.ctrlKey) {

					var index = el.getAttribute('index');
					var s = currentSegments[index];
					
					if (s.command == 'M') {
						currentSegments[index+1].command = 'M';
					}

					currentSegments[index] = null;
					this.updateSegments(currentSegments);
					el.parentNode.removeChild(el);
				} else {
					selectSegment = true; 
					selectElement = el; 
				}

			} else if (el.nodeName == 'path') {
				currentTarget = el;
				var segments = this.parsePath(el.getAttribute('d'));
				currentSegments = segments;
				this.showSegment(segments);
			} else if (el.nodeName == 'rect') {
				this.showSegment(null);
			}
		}

		this.updateSegments = function (s) {
			currentTarget.setAttribute("d", this.joinPaths(s));
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
						cx : segment.x,
						cy : segment.y,
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
						cx : segment.x,
						cy : segment.y,
							r : 5
					});

					seg.append(circle);
					seg.element.appendChild(circle.element);
				}
			}

		}

		this.parsePath = function (pathString) {
			var arr = pathString.match(parseRegForPath);

			var segments =  [];
			for(var i = 0, len = arr.length; i < len; i++) {
				var segment = arr[i];

				if (segment.indexOf("M") > -1) {
					var temp = segment.replace("M","").split(",");
					segments.push({ command : "M", x : temp[0], y : temp[1] });
				} else if (segment.indexOf("L") > -1) { 
					var temp = segment.replace("L","").split(",");
					segments.push({ command : "L", x : temp[0], y : temp[1] });
				} else if (segment.indexOf("Z") > -1) { 
					segments.push({ command : "Z"});
				}
			}

			return segments;

		}

		this.joinPaths = function (segments) {
			var arr = [];
			for(var i = 0, len = segments.length; i < len; i++) {
				var s = segments[i];

				if (!s)  {  continue; }

				if (s.command == 'Z' || s.command == 'z')
				{
					arr.push(s.command);
				} else {
					arr.push([s.command, [s.x, s.y].join(",") ].join(""));
				}
			}

			return arr.join(" ");
		}

		this.drag = function (e) {

			if (selectSegment && selectElement) 	{
				var seg = currentSegments[selectElement.getAttribute("index")];
				seg.x = e.clientX - distX;
				seg.y  = e.clientY - distY;

				this.updateSegments(currentSegments);
				selectElement.setAttribute('cx', seg.x);
				selectElement.setAttribute('cy', seg.y);
			} else {
				currentPen.push( { x : e.clientX, y : e.clientY });
				this.drawCurrentPen();
			}
		}

		this.dragEnd = function (e) {

			if (selectSegment) 	{ 
				selectSegment = false; 
				selectElement = null;
			} else  {
				currentPen.push( { x : e.clientX, y : e.clientY });

				this.drawCurrentPen(true);
				this.drawEnd();
			}

		}

		this.drawCurrentPen = function (isEnd) {
			for(var i = 0, len=  currentPen.length; i < len; i++) {
				var pen = currentPen[i];
				if (i == 0) {
					currentPath.MoveTo(pen.x - distX, pen.y- distY);
				} else {
					currentPath.LineTo(pen.x - distX, pen.y - distY);
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