const subjects = ['tamil', 'english', 'maths', 'science', 'social'];

const config = {
	minPassMark: 35,
	subjects: subjects,
	markSheetHeader: [
		'rollNo',
		'name',
		...subjects,
		'total',
		'result',
		'rank',
	],
	currentMarkSheet: {
		rollNo: '',
		name: '',
		...subjects.reduce((acc, subject) =>
			({ ...acc, [subject]: '' }), {}),
	},
};

export default config;
