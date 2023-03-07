import processMarkSheets from './processMarkSheets';

const calcCount = (context) => {
	const { data } = context;

	return processMarkSheets(context)
		.filter(({ result }) => result === data).length;
};

export default calcCount;
