const standardizeMarkSheets = (markSheets) =>
	markSheets.map((markSheet) => {
		const { tamil, english, maths, science, social } = markSheet;

		return {
			...markSheet,
			tamil: +tamil,
			english: +english,
			maths: +maths,
			science: +science,
			social: +social,
		};
	});

const calcTotal = (markSheets) => markSheets.map((markSheet) => {
	const { tamil, english, maths, science, social } = markSheet;

	return {
		...markSheet,
		total: tamil + english + maths + science + social,
	};
});

const calcResult = (markSheets) =>
	markSheets.map((markSheet) => {
		const { tamil, english, maths, science, social } = markSheet;
		const minPassMark = 35;
		const isPassed = minPassMark <= Math.min(
			tamil, english, maths, science, social
		);

		return { ...markSheet, result: isPassed ? 'pass' : 'fail' };
	});
const getFailedMarkSheets = (markSheets) =>
	markSheets.filter(({ result }) => result === 'fail');

const sortPassedMarkSheets = (markSheets) =>
	[...markSheets].sort((a, b) => b.total - a.total);

const getPassedMarkSheets = (markSheets) =>
	markSheets.filter(({ result }) => result === 'pass');

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

const rankMarkSheets = (markSheets) => {
	const passedMarkSheets = getPassedMarkSheets(markSheets);
	const sortedPassedMarkSheets = sortPassedMarkSheets(passedMarkSheets);

	const rankedMarkSheets = sortedPassedMarkSheets.reduce(calcRank, []);
	const failedMarkSheets = getFailedMarkSheets(markSheets)
		.map((studentData) => ({ ...studentData, rank: '-' }));

	return [...rankedMarkSheets, ...failedMarkSheets];
};

const processMarkSheets = (markSheets) => {
	const standardizedMarkSheets = standardizeMarkSheets(markSheets);
	const getTotal = calcTotal(standardizedMarkSheets);
	const calculatedResult = calcResult(getTotal);

	return rankMarkSheets(calculatedResult);
};

export default processMarkSheets;
