/**
 * 55	53
 2009–10[85]	35	34	3	1	11	8	4[b]	4	53	47
 2010–11[96]	33	31	7	7	13	12	2[c]	3	55	53
 2011–12[106]	37	50	7	3	11	14	5[d]	6	60	73
 2012–13[148]	32	46	5	4	11	8	2[c]	2	50	60
 2013–14[148]	31	28	6	5	7	8	2[c]	0	46	41
 2014–15[173]	38	43	6	5	13	10	—	57	58
 2015–16[365]	24	22	4	5	4	5	4[e]	4	36	36
 * @type {{offensePoints: *[]}}
 */

var data = {
	offensePoint: [{
		messiGoal: 47,
		messiAssist: 11,
		ronaldoGoal: 33,
		ronaldoAssist: 7,
		season: '09/10'
	},{
		messiGoal: 53,
		messiAssist: 23,
		ronaldoGoal: 53,
		ronaldoAssist: 15,
		season: '10/11'
	},{
		messiGoal: 73,
		messiAssist: 29,
		ronaldoGoal: 60,
		ronaldoAssist: 15,
		season: '11/12'
	},{
		messiGoal: 60,
		messiAssist: 15,
		ronaldoGoal: 55,
		ronaldoAssist: 12,
		season: '12/13'
	},{
		messiGoal: 41,
		messiAssist: 14,
		ronaldoGoal: 51,
		ronaldoAssist: 14,
		season: '13/14'
	},{
		messiGoal: 58,
		messiAssist: 27,
		ronaldoGoal: 61,
		ronaldoAssist: 21,
		season: '14/15'
	}],
	allTimeStats: [
		{
			type: 'APPS',
			messi: 625,
			ronaldo: 784
		},
		{
			type: 'GOALS',
			messi: 498,
			ronaldo: 532
		},
		{
			type: 'ASSISTS',
			messi: 201,
			ronaldo: 178
		},
		{
			type: 'A MATCH GOALS',
			messi: 49,
			ronaldo: 55
		}
	],
	/**
	 * Messi: https://www.whoscored.com/Players/11119/History/Lionel-Messi
	 */
	averageRating: [{
		season: '09/10',
		messi: '8.67',
		ronaldo: '8.24'
	}, {
		season: '10/11',
		messi: '8.76',
		ronaldo: '8.35'
	}, {
		season: '11/12',
		messi: '8.88',
		ronaldo: '8.28'
	}, {
		season: '12/13',
		messi: '8.83',
		ronaldo: '8.15'
	}, {
		season: '13/14',
		messi: '8.34',
		ronaldo: '8.27'
	}, {
		season: '14/15',
		messi: '8.84',
		ronaldo: '8.48'
	}, {
		season: '15/16',
		messi: '8.47',
		ronaldo: '7.87'
	}]
};
