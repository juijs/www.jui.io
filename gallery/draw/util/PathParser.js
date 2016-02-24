jui.define("util.parser.path", [], function () {
    var PathParser = function () {
			var parseRegForPath = /([mMlLvVhHcCsSqQtTaAzZ]([^mMlLvVhHcCsSqQtTaAzZ]*))/g;
		    var splitReg = /[\b\t \,]/g;
			var segments =  [];
			var pathElement;
			this.init = function (el) {
				pathElement = el;
				this.parse();
			}

			this.parse = function () {
				var pathString = pathElement.getAttribute('d');
				var arr = pathString.match(parseRegForPath);
				segments = [];

				for(var i = 0, len = arr.length; i < len; i++) {
					var segment = arr[i];

					if (segment.indexOf("M") > -1) {
						var temp = segment.replace("M", "").split(splitReg);
						segments.push({command: "M", values : temp });
					} else if (segment.indexOf("m") > -1) {
						var temp = segment.replace("m","").split(splitReg);
						segments.push({ command : "m", values : temp });
					} else if (segment.indexOf("L") > -1) {
						var temp = segment.replace("L","").split(splitReg);
						segments.push({ command : "L", values : temp });
					} else if (segment.indexOf("l") > -1) {
						var temp = segment.replace("l","").split(splitReg);
						segments.push({ command : "l", values : temp });
					} else if (segment.indexOf("H") > -1) {
						var temp = segment.replace("H","").split(splitReg);
						segments.push({ command : "H", values : temp });
					} else if (segment.indexOf("h") > -1) {
						var temp = segment.replace("h","").split(splitReg);
						segments.push({ command : "h", values : temp });
					} else if (segment.indexOf("V") > -1) {
						var temp = segment.replace("V","").split(splitReg);
						segments.push({ command : "V", values : temp });
					} else if (segment.indexOf("v") > -1) {
						var temp = segment.replace("v","").split(splitReg);
						segments.push({ command : "v", values : temp });
					} else if (segment.indexOf("C") > -1) {
						var temp = segment.replace("C","").split(splitReg);
						segments.push({ command : "C", values : temp });
					} else if (segment.indexOf("c") > -1) {
						var temp = segment.replace("c","").split(splitReg);
						segments.push({ command : "c", values : temp });
					} else if (segment.indexOf("S") > -1) {
						var temp = segment.replace("S","").split(splitReg);
						segments.push({ command : "S", values : temp });
					} else if (segment.indexOf("s") > -1) {
						var temp = segment.replace("s","").split(splitReg);
						segments.push({ command : "s", values : temp });
					} else if (segment.indexOf("Q") > -1) {
						var temp = segment.replace("Q","").split(splitReg);
						segments.push({ command : "Q", values : temp });
					} else if (segment.indexOf("q") > -1) {
						var temp = segment.replace("q","").split(splitReg);
						segments.push({ command : "q", values : temp });
					} else if (segment.indexOf("T") > -1) {
						var temp = segment.replace("T","").split(splitReg);
						segments.push({ command : "T", values : temp });
					} else if (segment.indexOf("t") > -1) {
						var temp = segment.replace("t","").split(splitReg);
						segments.push({ command : "t", values : temp });
					} else if (segment.indexOf("A") > -1) {
						var temp = segment.replace("A","").split(splitReg);
						segments.push({ command : "A", values : temp });
					} else if (segment.indexOf("a") > -1) {
						var temp = segment.replace("a","").split(splitReg);
						segments.push({ command : "a", values : temp });
					} else if (segment.indexOf("Z") > -1) {
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
    };

    PathParser.setup = function () {
        return {

        };
    };

    return PathParser;
});
