jui.define("util.parser.path", [], function () {
	var PathParser = function () {
		var parseRegForPath = /([mMlLvVhHcCsSqQtTaAzZ]([^mMlLvVhHcCsSqQtTaAzZ]*))/g;
		var splitReg = /[\b\t \,]/g;
		var segments =  [];
		var pathElement;

		var matrix = {

			multiply : function (a) {
				return function (b, startIndex) {
					var x = +b[startIndex];
					var y = +b[startIndex+1];

					return [
						a[0][0] * x + a[0][1] * x +  a[0][2] * x,
						a[1][0] * y + a[1][1] * y +  a[1][2] * y,
						1
					];
				};
			},

			translate : function (tx, ty) {
				return this.multiply([
					[1, 0, tx],
					[0, 1, ty],
					[0, 0, 1]
				]);
			},

			rotate : function (angle) {
				return this.multiply([
					[Math.cos(angle) , Math.sin(angle), 0]
						[-Math.sin(angle),  Math.cos(angle), 0],
					[0, 0, 1]
				]);
			},

			scale : function (sx, sy) {
				return this.multiply([
					[sx, 0, 0],
					[0, sy, 0],
					[0, 0, 1]
				]);
			},

			skewX : function (x) {
				return this.multiply([
					[1, x, 0],
					[0, 1, 0],
					[0, 0, 1]
				]);
			},

			skewY : function (y) {
				return this.multiply([
					[1, 0, 0],
					[y, 1, 0],
					[0, 0, 1]
				]);
			},

			reflectionOrigin : function () {
				return this.multiply([
					[-1, 0, 0],
					[0, -1, 0],
					[0, 0, 1]
				]);
			},

			reflectionX : function () {
				return this.multiply([
					[1, 0, 0],
					[0, -1, 0],
					[0, 0, 1]
				]);
			},

			reflectionY : function () {
				return this.multiply([
					[-1, 0, 0],
					[0, 1, 0],
					[0, 0, 1]
				]);
			}
		};

		this.init = function (el) {
			pathElement = el;
			this.parse();
		}

		this.trim = function (str)  {
			var arr = str.split(splitReg);
			var data = [];
			for (var i = 0, len = arr.length; i < len ; i++ )
			{
				if (arr[i] == '') continue;

				data.push(arr[i]);
			}

			return data;
		}

		this.parse = function () {
			var pathString = pathElement.getAttribute('d');
			var arr = pathString.match(parseRegForPath);
			segments = [];

			for(var i = 0, len = arr.length; i < len; i++) {
				var s = arr[i];

				if (s.indexOf("M") > -1) {
					var temp = this.trim(s.replace("M", ""));
					segments.push({command: "M", values : temp });
				} else if (s.indexOf("m") > -1) {
					var temp = this.trim(s.replace("m",""));
					segments.push({ command : "m", values : temp });
				} else if (s.indexOf("L") > -1) {
					var temp = this.trim(s.replace("L",""));
					segments.push({ command : "L", values : temp });
				} else if (s.indexOf("l") > -1) {
					var temp = this.trim(s.replace("l",""));
					segments.push({ command : "l", values : temp });
				} else if (s.indexOf("H") > -1) {
					var temp = this.trim(s.replace("H",""));
					segments.push({ command : "H", values : temp });
				} else if (s.indexOf("h") > -1) {
					var temp = this.trim(s.replace("h",""));
					segments.push({ command : "h", values : temp });
				} else if (s.indexOf("V") > -1) {
					var temp = this.trim(s.replace("V",""));
					segments.push({ command : "V", values : temp });
				} else if (s.indexOf("v") > -1) {
					var temp = this.trim(s.replace("v",""));
					segments.push({ command : "v", values : temp });
				} else if (s.indexOf("C") > -1) {
					var temp = this.trim(s.replace("C",""));
					segments.push({ command : "C", values : temp });
				} else if (s.indexOf("c") > -1) {
					var temp = this.trim(s.replace("c",""));
					segments.push({ command : "c", values : temp });
				} else if (s.indexOf("S") > -1) {
					var temp = this.trim(s.replace("S",""));
					segments.push({ command : "S", values : temp });
				} else if (s.indexOf("s") > -1) {
					var temp = this.trim(s.replace("s",""));
					segments.push({ command : "s", values : temp });
				} else if (s.indexOf("Q") > -1) {
					var temp = this.trim(s.replace("Q",""));
					segments.push({ command : "Q", values : temp });
				} else if (s.indexOf("q") > -1) {
					var temp = this.trim(s.replace("q",""));
					segments.push({ command : "q", values : temp });
				} else if (s.indexOf("T") > -1) {
					var temp = this.trim(s.replace("T",""));
					segments.push({ command : "T", values : temp });
				} else if (s.indexOf("t") > -1) {
					var temp = this.trim(s.replace("t",""));
					segments.push({ command : "t", values : temp });
				} else if (s.indexOf("A") > -1) {
					var temp = this.trim(s.replace("A",""));
					segments.push({ command : "A", values : temp });
				} else if (s.indexOf("a") > -1) {
					var temp = this.trim(s.replace("a",""));
					segments.push({ command : "a", values : temp });
				} else if (s.indexOf("Z") > -1) {
					segments.push({ command : "Z"});
				}
			}

		}

		this.length = function () {
			return segments.length;
		}

		this.setSegments = function (index, seg) {
			segments[index] = seg;
		}

		this.getSegments = function (index) {
			if (typeof index != 'undefined')
			{
				return segments[index];
			}
			return segments;
		}

		this.joinPath = function () {
			var arr = [];
			for(var i = 0, len = segments.length; i < len; i++) {
				var s = segments[i];

				if (!s)  {  continue; }

				if (s.command == 'Z' || s.command == 'z')
				{
					arr.push(s.command);
				} else {
					arr.push([s.command, s.values.join(" ") ].join(" "));
				}
			}

			return arr.join(" ");
		}

		this.update = function () {
			pathElement.setAttribute("d", this.joinPath());
		}

		this.each = function (callback) {
			for(var i = 0, len = segments.length; i < len; i++) {
				segments[i] = callback.call(this, segments[i]);
			}
		}

		this._loop = function (m) {
			this.each(function(segment) {
				var v = segment.values;
				var c = segment.command.toUpperCase();

				if (c == 'M' || c == 'L') {
					segment.values = m(v, 0);
				} else if (c == 'V') {
					var result = m([+v[0], 0]);
					segment.values = [result[0]];
				} else if (c == 'H') {
					var result = m([0, +v[0]]);
					segment.values = [result[1]];
				} else if (c == 'C' || c == 'S' || c == 'T' || c == 'Q') {
					for(var i = 0, len = v.length; i < len; i+=2) {
						var result = m(v, i);
						segment.values[i] = result[0];
						segment.values[i+1] = result[1];
					}
				} else if (c == 'A') {

				}
			});
		}

		this.translate = function (tx, ty) {
			this._loop(matrix.translate(tx, ty));
		}

		this.scale = function (sx, sy) {
			this._loop(matrix.scale(sx, sy));
		}

		this.rotate = function (angle) {
			this._loop(matrix.rotate(angle));
		}

		this.reflectionOrigin = function () {
			this._loop(matrix.reflectionOrigin(angle));
		}

		this.reflectionX = function () {
			this._loop(matrix.reflectionX(angle));
		}

		this.reflectionY = function () {
			this._loop(matrix.reflectionY(angle));
		}

		this.skewX = function (sx) {
			this._loop(matrix.skewX(sx));
		}

		this.skewY = function (sy) {
			this._loop(matrix.skewY(sy));
		}
	};

	PathParser.setup = function () {
		return {

		};
	};

	return PathParser;
});
