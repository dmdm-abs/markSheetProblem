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
		rollNo: {
			text: '',
			type: 'text',
			convertor: String,
		},
		name: {
			text: '',
			type: 'text',
			convertor: String,
		},
		...subjects.reduce((acc, subject) =>
			({ ...acc, [subject]: {
				text: 0,
				type: 'number',
				convertor: Number,
			}}), {}),
	},
};

export default config;
