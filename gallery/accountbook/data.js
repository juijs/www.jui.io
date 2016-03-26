function addDefaultData(data, count) {
	for(var i = 0; i < count; i++) {
		data.push({
			date: "",
			memo: "",
			cash: "",
			card: "",
			type: ""
		});
	}
}

function getOutgoingDataForChart(data) {
	var newData = [];

	for(var i = 0; i < data.length; i++) {
		var d = data[i];

		if(d.date != "") {
			if (!newData[d.type]) {
				newData[d.type] = {
					cash: 0,
					card: 0
				}
			}

			newData[d.type].cash += d.cash;
			newData[d.type].card += d.card;
		}
	}

	for(var i = 0; i < OUTGOING_TYPES.length; i++) {
		if(!newData[i]) {
			newData[i] = { cash: 0, card: 0 };
		}
	}

	return newData;
}

function getOutgoingTypes() {
	var types = [];

	for(var i = 0; i < OUTGOING_TYPES.length; i++) {
		types.push({
			value: i,
			text: OUTGOING_TYPES[i]
		});
	}

	return types;
}

var OUTGOING_TYPES = [
	"Food",
	"Mobile",
	"Provision",
	"Clothing",
	"Culture",
	"Education",
	"Car",
	"Event",
	"Tax",
	"ETC"
];

var INCOME_TYPES = [
	"Salary",
	"Bonus"
];

var outgoing_data = [{
	date: "2016/03/01",
	memo: "Mcdonald - lunch",
	cash: 0,
	card: 8900,
	type: 0
}, {
	date: "2016/03/01",
	memo: "7 eleven - buy snack",
	cash: 0,
	card: 6250,
	type: 0
}, {
	date: "2016/03/02",
	memo: "7 eleven - buy snack",
	cash: 5360,
	card: 0,
	type: 0
}, {
	date: "2016/03/04",
	memo: "Homeplus - month's purchase food",
	cash: 0,
	card: 50530,
	type: 0
}, {
	date: "2016/03/05",
	memo: "Holly Beer - old boy network",
	cash: 0,
	card: 47500,
	type: 0
}, {
	date: "2016/03/05",
	memo: "Coupang - buy jeans",
	cash: 0,
	card: 33340,
	type: 3
}, {
	date: "2016/03/05",
	memo: "Coupang - buy SD card adapter",
	cash: 0,
	card: 10500,
	type: 5
}, {
	date: "2016/03/06",
	memo: "CGV - Movies",
	cash: 0,
	card: 18000,
	type: 4
}, {
	date: "2016/03/06",
	memo: "GS Caltex - transportation",
	cash: 50000,
	card: 0,
	type: 6
}, {
	date: "2016/03/06",
	memo: "KT - mobile phone charges",
	cash: 79000,
	card: 0,
	type: 1
}];

var income_data = [{
	date: "2016/03/24",
	memo: "Apple Corporation - salary",
	cash: 10000000,
	type: 0
}];

addDefaultData(outgoing_data, 1);
addDefaultData(income_data, 25);
