jui.define("chart.widget.drawing.canvas", [], function () {
    var DrawingCanvas = function () {

        var group;
        var rect;
        var canvasWidth = 400;
        var canvasHeight = 200;
        var ruleBase = 50;
        var ruleSize = 15;
        var ruleSizeV = 30;


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

            this.initFilter();

            this.initCanvas();
            this.initRule();

        }

        this.initCanvas = function () {
            rect = this.svg.rect({
                fill: 'white',
                filter : 'url(#drop-shadow)',
                'pointer-events' : 'inherit'
            });

            group.append(rect);
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