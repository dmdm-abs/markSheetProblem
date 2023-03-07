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

const actions = {
	setValue,
	getMarkSheet,
};

export default actions;
