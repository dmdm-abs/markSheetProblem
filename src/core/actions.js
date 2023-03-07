import calcCount from '../services/calcCount';

const setValue = ({ state: { currentMarkSheet }, data: { key, value }}) => ({
	currentMarkSheet: {
		...currentMarkSheet,
		[key]: value,
	},
});

const getMarkSheet = ({ state: { currentMarkSheet, markSheets }, seed }) => ({
	markSheets: [...markSheets, currentMarkSheet],
	currentMarkSheet: seed.currentMarkSheet,
});

const setCount = (context) => ({
	passCount: calcCount({ ...context, data: 'pass' }),
	failCount: calcCount({ ...context, data: 'fail' }),

});

const actions = {
	setValue,
	getMarkSheet,
	setCount,
};

export default actions;
