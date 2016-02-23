jui.define("util.parser.path", [], function () {
    var PathParser = function () {
			var parseRegForPath = /([mMlLvVhHcCsSqQtTaAzZ]([^mMlLvVhHcCsSqQtTaAzZ]*))/g;
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
						var temp = segment.replace("M","").split(",");
						segments.push({ command : "M", x : temp[0], y : temp[1] });
					} else if (segment.indexOf("L") > -1) { 
						var temp = segment.replace("L","").split(",");
						segments.push({ command : "L", x : temp[0], y : temp[1] });
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
						arr.push([s.command, [s.x, s.y].join(",") ].join(""));
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