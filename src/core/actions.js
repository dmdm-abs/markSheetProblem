import { peek } from '@laufire/utils/debug';

const changeRollNo = (context) => {
	const { state: { currentMarkSheet }, data }	= context;

	peek({ currentMarkSheet: { ...currentMarkSheet, rollNo: data }});
};
const actions = {
	changeRollNo,
};

export default actions;
