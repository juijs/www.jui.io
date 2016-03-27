var common_month = 3;

var expense_types = [
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

var income_types = [
	"Salary",
	"Bonus"
];

var expense_data = [{
	date: "2016/03/04",
	memo: "Mcdonald - lunch",
	cash: 0,
	card: 8900,
	type: 0
}, {
	date: "2016/03/04",
	memo: "7 eleven - buy snack",
	cash: 0,
	card: 6250,
	type: 0
}, {
	date: "2016/03/07",
	memo: "7 eleven - buy snack",
	cash: 5360,
	card: 0,
	type: 0
}, {
	date: "2016/03/07",
	memo: "Homeplus - month's purchase food",
	cash: 0,
	card: 50530,
	type: 0
}, {
	date: "2016/03/07",
	memo: "Holly Beer - old boy network",
	cash: 0,
	card: 47500,
	type: 0
}, {
	date: "2016/03/19",
	memo: "Coupang - buy jeans",
	cash: 0,
	card: 33340,
	type: 3
}, {
	date: "2016/03/19",
	memo: "Coupang - buy SD card adapter",
	cash: 0,
	card: 10500,
	type: 5
}, {
	date: "2016/03/19",
	memo: "CGV - Movies",
	cash: 0,
	card: 18000,
	type: 4
}, {
	date: "2016/03/22",
	memo: "GS Caltex - transportation",
	cash: 50000,
	card: 0,
	type: 6
}, {
	date: "2016/03/24",
	memo: "KT - mobile phone charges",
	cash: 79000,
	card: 0,
	type: 1
}];

var income_data = [{
	date: "2016/03/24",
	memo: "Apple Corporation - salary",
	cash: 10000000,
	card: 0,
	type: 0
}];

function addDefaultData(data, count) {
	for(var i = 0; i < count; i++) {
		data.push({
			date: "",
			memo: "",
			cash: 0,
			card: 0,
			type: ""
		});
	}
}

function getExpenseDataForChart(data) {
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

	for(var i = 0; i < expense_types.length; i++) {
		if(!newData[i]) {
			newData[i] = { cash: 0, card: 0 };
		}
	}

	return newData;
}

function getExpenseTypes() {
	var types = [];

	for(var i = 0; i < expense_types.length; i++) {
		types.push({
			value: i,
			text: expense_types[i]
		});
	}

	return types;
}

function getIncomeTypes() {
	var types = [];

	for(var i = 0; i < income_types.length; i++) {
		types.push({
			value: i,
			text: income_types[i]
		});
	}

	return types;
}

function getExpenseAndIncomeData(date) {
	var _ = jui.include("util.base"),
		date = _.dateFormat(new Date(2016, common_month - 1, date), "yyyy/MM/dd"),
		obj = {
			expense: { count: 0, total: 0, list: [] },
			income: { count: 0, total: 0, list: [] }
		};

	for(var i = 0; i < expense_data.length; i++) {
		var d = expense_data[i];

		if(d.date == date) {
			obj.expense.count += 1;
			obj.expense.total += (d.card + d.cash);
			obj.expense.list.push(d);
		}
	}

	for(var i = 0; i < income_data.length; i++) {
		var d = income_data[i];

		if(d.date == date) {
			obj.income.count += 1;
			obj.income.total += (d.card + d.cash);
			obj.income.list.push(d);
		}
	}

	return (obj.expense.count == 0 && obj.income.count == 0) ? null : obj;
}

function getExpenseAndIncomeSum() {
	var obj = {
		expense: { cash: 0, card: 0 },
		income: { cash: 0, card: 0 }
	};

	for(var i = 0; i < expense_data.length; i++) {
		var d = expense_data[i];

		obj.expense.cash += d.cash;
		obj.expense.card += d.card;
	}

	for(var i = 0; i < income_data.length; i++) {
		var d = income_data[i];

		obj.income.cash += d.cash;
		obj.income.card += d.card;
	}

	return obj;
}

addDefaultData(expense_data, 40);
addDefaultData(income_data, 49);
