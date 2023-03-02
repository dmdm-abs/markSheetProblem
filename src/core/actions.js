const setValue = ({ state: { currentMarkSheet }, data: { header, value }}) =>
	({ currentMarkSheet: { ...currentMarkSheet, [header]: value }});

const getMarkSheet = ({ state: { currentMarkSheet, markSheets }, seed }) => ({
	markSheets: [...markSheets, currentMarkSheet],
	currentMarkSheet: seed.currentMarkSheet,
});

const actions = {
	setValue,
	getMarkSheet,
};

export default actions;
