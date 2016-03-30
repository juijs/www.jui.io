function getTimeToIndex() {
	return new Date().getHours() * 6;
}

function getRandomValue(start, limit) {
	return Math.floor(Math.random() * limit) + start;
}

function setRadarClip(chart) {
	var clipPath = chart.svg.clipPath({
		id : 'map-clip'
	});

	var area = chart.axis(0).area();
	var size = Math.min(area.width, area.height);

	var clipCircle = chart.svg.circle({
		cx : area.width/2,
		cy : area.height/2,
		r  : size/2,
		fill : 'black'
	});

	var defs = chart.svg.root.element.children[0].children[0];

	clipPath.append(clipCircle);
	clipPath.element.appendChild(clipCircle.element);

	chart.appendDefs(clipPath);
	defs.appendChild(clipPath.element);

	chart.axis(0).map.root.attr({
		'clip-path' : 'url(#map-clip)'
	});

	var g = chart.svg.root.element.children[0].children[6];
	g.setAttribute('clip-path', 'url(#map-clip)');
}

function getRadarDomain() {
	var domain = [];

	for(var i = 0; i < 360; i += 30) {
		domain.push(i);
	}

	return domain;
}

function startRotateF16(f16, f16Y) {
	setInterval(function() {
		(f16Y += 10);
		if (f16Y > 360) {
			f16Y = 0;
		}

		f16.axis(0).set("degree", {
			y : f16Y
		});
	}, 200);
}

function startDateRender() {
	setInterval(function() {
		var d = new Date(),
			h = d.getHours(),
			m = d.getMinutes(),
			s = d.getSeconds(),
			dateElem = document.getElementById("date"),
			timeElem = document.getElementById("time");

		if (h < 10) h = "0" + h;
		if (m < 10) m = "0" + m;
		if (s < 10) s = "0" + s;

		dateElem.innerHTML = moment().format("LL");
		timeElem.innerHTML = [ h, m, s ].join(":");
	}, 200);
}

function getCompassData() {
	var u = "mph",
		d = Math.floor(Math.random() * 360),
		dStr = "NE";

	if(d > 270) dStr = "SE";
	else if(d > 180) dStr = "SW";
	else if(d > 90) dStr = "NW";

	return {
		type : "compass",
		degree : d,
		title : "10." + Math.floor(Math.random() * 9),
		topText : d + "° " + dStr,
		supText : u,
		bottomText : "WIND GUST 10." + Math.floor(Math.random() * 9) + u
	}
}

function getWindData() {
	var data = [],
		values = [ 3, 2, 4, 1, 18, 10, 12, 9, 10, 9, 3, 5, 4, 3, 16, 10, 12, 11, 8, 9, 3, 2, 4, 3, 4 ];

	for(var i = 0; i <= 25; i++) {
		data.push({ second: i, speed: values[i] });
	}

	return data;
}

function getTPSData() {
	var data = [];

	for(var i = 0; i < 144; i++) {
		var randoms = [
			getRandomValue(10, 25), getRandomValue(10, 20), getRandomValue(10, 15),
			getRandomValue(10, 15), getRandomValue(10, 10), getRandomValue(10, 10),
			getRandomValue(10, 10), getRandomValue(20, 20), getRandomValue(30, 30),
			getRandomValue(40, 30), getRandomValue(50, 35), getRandomValue(60, 40),
			getRandomValue(45, 35), getRandomValue(40, 35), getRandomValue(35, 40),
			getRandomValue(35, 45), getRandomValue(45, 40), getRandomValue(40, 35),
			getRandomValue(40, 35), getRandomValue(35, 30), getRandomValue(30, 30),
			getRandomValue(25, 20), getRandomValue(20, 20), getRandomValue(15, 20)
		];

		data.push({ tps: randoms[Math.floor(i / 6)] });
	}

	return data;
}

function getKNOTDataForFlight() {
	var data = [],
		t = 0.3,
		v = 8,
		acc = 0,
		dis = 0;

	for(var i = 0; i < 300; i++) {
		acc += (5 * t);

		// 가속도 대입
		dis += (v + acc) * t;

		data.push({ KNOT: dis });
	}

	return data;
}

function getFTDataForFlight() {
	var data = [],
		t = 0.1,
		v = 4,
		acc = 0,
		dis = 20;

	for(var i = 0; i < 300; i++) {
		acc += (5 * t);

		// 가속도 대입
		dis += (v + acc) * t;

		data.push({ FT: (dis > 350) ? 350 : dis });
	}

	return data;
}
