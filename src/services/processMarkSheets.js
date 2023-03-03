const standardizeMarkSheets = ({ state: { markSheets }}) =>
	markSheets.map((markSheet) => {
		const { tamil, english, maths, science, social } = markSheet;

		return {
			...markSheet,
			tamil: Number(tamil),
			english: Number(english),
			maths: Number(maths),
			science: Number(science),
			social: Number(social),
		};
	});

const calcTotal = ({ data }) => data.map((markSheet) => {
	const { tamil, english, maths, science, social } = markSheet;

	return {
		...markSheet,
		total: tamil + english + maths + science + social,
	};
});

const isPassed = ({ markSheet, minPassMark }) => {
	const { tamil, english, maths, science, social } = markSheet;

	return minPassMark <= Math.min(
		tamil, english, maths, science, social
	);
};

const calcResult = ({ config: { minPassMark }, data }) =>
	data.map((markSheet) => ({
		...markSheet,
		result: isPassed({ markSheet, minPassMark }) ? 'pass' : 'fail',
	}));

const sortPassedMarkSheets = (markSheets) =>
	[...markSheets].sort((a, b) => b.total - a.total);

const getResultedMarkSheets = (markSheets, grade) =>
	markSheets.filter(({ result }) => result === grade);

const calcRank = (
	acc, markSheet, key
) => [
	...acc,
	{
		...markSheet,
		rank: key === 0
			? 1
			: acc[key - 1].total === markSheet.total
				? acc[key - 1].rank
				: key + 1,
	},
];

const rankMarkSheets = (context) => {
	const { data } = context;
	const passedMarkSheets = getResultedMarkSheets(data, 'pass');
	const sortedPassedMarkSheets = sortPassedMarkSheets(passedMarkSheets);

	const rankedMarkSheets = sortedPassedMarkSheets.reduce(calcRank, []);

	const failedMarkSheets = getResultedMarkSheets(data, 'fail')
		.map((studentData) => ({ ...studentData, rank: '-' }));

	return [...rankedMarkSheets, ...failedMarkSheets];
};

const processMarkSheets = (context) => {
	const standardizedMarkSheets = standardizeMarkSheets(context);
	const getTotal = calcTotal({ ...context, data: standardizedMarkSheets });
	const calculatedResult = calcResult({ ...context, data: getTotal });

	return rankMarkSheets({ ...context, data: calculatedResult });
};

export default processMarkSheets;
