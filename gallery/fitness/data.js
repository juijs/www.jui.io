var joining_data = [
	{ x: 0, y: 0, value: 100 },
	{ x: 0, y: 1, value: 93 },
	{ x: 0, y: 2, value: 96 },
	{ x: 0, y: 3, value: 100 },
	{ x: 0, y: 4, value: 100 },
	{ x: 0, y: 5, value: 100 },
	{ x: 1, y: 0, value: 85 },
	{ x: 1, y: 1, value: 86 },
	{ x: 1, y: 2, value: 84 },
	{ x: 1, y: 3, value: 86 },
	{ x: 1, y: 4, value: 100 },
	{ x: 1, y: 5, value: 100 },
	{ x: 2, y: 0, value: 77 },
	{ x: 2, y: 1, value: 77 },
	{ x: 2, y: 2, value: 72 },
	{ x: 2, y: 3, value: 82 },
	{ x: 2, y: 4, value: 100 },
	{ x: 2, y: 5, value: 100 },
	{ x: 3, y: 0, value: 74 },
	{ x: 3, y: 1, value: 68 },
	{ x: 3, y: 2, value: 64 },
	{ x: 3, y: 3, value: 72 },
	{ x: 3, y: 4, value: 100 },
	{ x: 4, y: 0, value: 68 },
	{ x: 4, y: 1, value: 62 },
	{ x: 4, y: 2, value: 56 },
	{ x: 4, y: 3, value: 65 },
	{ x: 4, y: 4, value: 100 },
	{ x: 5, y: 0, value: 54 },
	{ x: 5, y: 1, value: 57 },
	{ x: 5, y: 2, value: 52 },
	{ x: 5, y: 3, value: 62 },
	{ x: 5, y: 4, value: 100 },
	{ x: 6, y: 0, value: 48 },
	{ x: 6, y: 1, value: 55 },
	{ x: 6, y: 2, value: 52 },
	{ x: 6, y: 3, value: 55 },
	{ x: 6, y: 4, value: 100 },
	{ x: 7, y: 0, value: 48 },
	{ x: 7, y: 1, value: 55 },
	{ x: 7, y: 2, value: 52 },
	{ x: 7, y: 3, value: 55 },
	{ x: 8, y: 0, value: 48 },
	{ x: 8, y: 1, value: 55 },
	{ x: 8, y: 2, value: 52 },
	{ x: 8, y: 3, value: 55 },
	{ x: 9, y: 0, value: 48 },
	{ x: 9, y: 1, value: 55 },
	{ x: 9, y: 2, value: 52 },
	{ x: 9, y: 3, value: 55 },
	{ x: 10, y: 0, value: 48 },
	{ x: 10, y: 1, value: 53 },
	{ x: 10, y: 2, value: 52 },
	{ x: 10, y: 3, value: 55 },
	{ x: 11, y: 0, value: 48 },
	{ x: 11, y: 1, value: 53 },
	{ x: 11, y: 2, value: 48 },
	{ x: 11, y: 3, value: 55 },
	{ x: 12, y: 0, value: 45 },
	{ x: 12, y: 1, value: 53 },
	{ x: 12, y: 2, value: 48 },
	{ x: 13, y: 0, value: 45 },
	{ x: 13, y: 1, value: 53 },
	{ x: 13, y: 2, value: 48 },
	{ x: 14, y: 0, value: 45 },
	{ x: 14, y: 1, value: 53 },
	{ x: 14, y: 2, value: 48 },
	{ x: 15, y: 0, value: 45 },
	{ x: 15, y: 1, value: 53 },
	{ x: 15, y: 2, value: 48 },
	{ x: 16, y: 0, value: 45 },
	{ x: 16, y: 1, value: 53 },
	{ x: 17, y: 0, value: 45 },
	{ x: 17, y: 1, value: 53 },
	{ x: 18, y: 0, value: 45 },
	{ x: 18, y: 1, value: 53 },
	{ x: 19, y: 0, value: 45 },
	{ x: 19, y: 1, value: 53 },
	{ x: 20, y: 0, value: 45 },
	{ x: 21, y: 0, value: 45 },
	{ x: 22, y: 0, value: 45 },
	{ x: 23, y: 0, value: 42 },
	{ x: 24, y: 0, value: 42 },
	{ x: 25, y: 0, value: 11, isLast: true },
	{ x: 25, y: 1, value: 8, isLast: true },
	{ x: 25, y: 2, value: 11, isLast: true },
	{ x: 25, y: 3, value: 10, isLast: true },
];

var demo_names = [
	[ "MALE", "FEMALE" ],
	[ "15-20 yrs", "21-25 yrs", "26-35 yrs", "36-50 yrs", "50+ yrs" ],
	[ "1 - 3 Months", "3 - 6 Months", "6 Months - 1 Years", "1 Years+" ],
	[ "Lawyers", "Sales", "Engineer", "Designer", "Doctor", "Student", "IT", "Business", "Professor", "Retired" ]
],
demo_data = [
	[ { 0 : 49, 1 : 51 } ],
	[ { 0 : 21.12, 1 : 18.46, 2 : 21.34, 3 : 20.45, 4 : 18.63 } ],
	[ { 0 : 5.25, 1 : 9.43, 2 : 18.51, 3 : 75.39 } ],
	[ { 0 : 10.81, 1 : 9.7, 2 : 8.48, 3 : 9.2, 4 : 9.92, 5 : 9.92, 6 : 11.14, 7 : 10.81, 8 : 10.31, 9 : 9.7 } ]
];

var growth_data = [
	{
		startdate: "2015-10-08",
		enddate: "2015-10-14",
		val: 268
	},
	{
		startdate: "2015-10-15",
		enddate: "2015-10-21",
		val: 275
	},
	{
		startdate: "2015-10-22",
		enddate: "2015-10-28",
		val: 274
	},
	{
		startdate: "2015-10-29",
		enddate: "2015-11-04",
		val: 269
	},
	{
		startdate: "2015-11-05",
		enddate: "2015-11-11",
		val: 272
	},
	{
		startdate: "2015-11-12",
		enddate: "2015-11-18",
		val: 272
	},
	{
		startdate: "2015-11-19",
		enddate: "2015-11-25",
		val: 265
	},
	{
		startdate: "2015-11-26",
		enddate: "2015-12-02",
		val: 258
	},
	{
		startdate: "2015-12-03",
		enddate: "2015-12-09",
		val: 257
	},
	{
		startdate: "2015-12-10",
		enddate: "2015-12-16",
		val: 250
	},
	{
		startdate: "2015-12-17",
		enddate: "2015-12-23",
		val: 242
	},
	{
		startdate: "2015-12-24",
		enddate: "2015-12-30",
		val: 243
	},
	{
		startdate: "2015-12-31",
		enddate: "2016-01-06",
		val: 238
	},
	{
		startdate: "2016-01-07",
		enddate: "2016-01-13",
		val: 224
	},
	{
		startdate: "2016-01-14",
		enddate: "2016-01-20",
		val: 210
	},
	{
		startdate: "2016-01-21",
		enddate: "2016-01-27",
		val: 201
	},
	{
		startdate: "2016-01-28",
		enddate: "2016-02-03",
		val: 191
	},
	{
		startdate: "2016-02-04",
		enddate: "2016-02-10",
		val: 180
	},
	{
		startdate: "2016-02-11",
		enddate: "2016-02-17",
		val: 172
	},
	{
		startdate: "2016-02-18",
		enddate: "2016-02-24",
		val: 168
	},
	{
		startdate: "2016-02-25",
		enddate: "2016-03-02",
		val: 161
	},
	{
		startdate: "2016-03-03",
		enddate: "2016-03-09",
		val: 156
	},
	{
		startdate: "2016-03-10",
		enddate: "2016-03-16",
		val: 150
	}
];

var event_data = [
	{
		val: 0.14,
		txt: "Calender Distribution"
	},
	{
		val: 0.42,
		txt: "Annual Picnic"
	},
	{
		val: 0.42,
		txt: "New Yoga Class"
	},
	{
		val: 0.57,
		txt: "New Kids Fitness Section"
	},
	{
		val: 0.42,
		txt: "3rd Anniversary Party"
	},
	{
		val: 0.85,
		txt: "Announcement of 30% Discount For Members"
	},
	{
		val: 0.57,
		txt: "Introduction of Advanced Machinery"
	},
	{
		val: 0,
		txt: "Mr. & Ms. FIT Championship 2015"
	},
	{
		val: 0.57,
		txt: "Camp on Warm up/ Cool Down Exercise"
	},
	{
		val: 0.14,
		txt: "Opening of new Suppliment Food Shop"
	},
	{
		val: 0.14,
		txt: "New Karate section for all"
	},
	{
		val: 0.14,
		txt: "X-MAS 2015 Celebration"
	}
];
