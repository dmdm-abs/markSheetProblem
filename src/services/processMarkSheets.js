import { filter, map, reduce } from '@laufire/utils/collection';

const calcTotal = ({ state: { markSheets }, config: { subjects }}) =>
	map(markSheets, (markSheet) => ({
		...markSheet,
		total: reduce(
			subjects, (total, value) => total + markSheet[value], 0
		),
	}));

const isPassed = ({ data, config: { minPassMark, subjects }}) =>
	minPassMark <= Math.min(map(subjects, (subject) => data[subject]));

const calcResult = (context) => map(context.data, (markSheet) => ({
	...markSheet,
	result: isPassed({ ...context, data: markSheet }) ? 'pass' : 'fail',
}));

const sortPassedMarkSheets = ({ data }) =>
	[...data].sort((a, b) => b.total - a.total);

const getResultedMarkSheets = ({ data, res }) =>
	filter(data, ({ result }) => result === res);

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
	const passedMarkSheets = getResultedMarkSheets({
		...context,
		res: 'pass',
	});
	const sortedPassedMarkSheets = sortPassedMarkSheets({
		...context,
		data: passedMarkSheets,
	});

	const rankedMarkSheets = sortedPassedMarkSheets.reduce(calcRank, []);

	const failedMarkSheets = getResultedMarkSheets({ ...context, res: 'fail' })
		.map((studentData) => ({ ...studentData, rank: '-' }));

	return [...rankedMarkSheets, ...failedMarkSheets];
};

const processMarkSheets = (context) => {
	const getTotal = calcTotal({ ...context });
	const calculatedResult = calcResult({ ...context, data: getTotal });

	return rankMarkSheets({ ...context, data: calculatedResult });
};

export default processMarkSheets;
