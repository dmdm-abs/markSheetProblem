import { map } from '@laufire/utils/collection';
import config from './config';

const seed = {
	markSheets: [],
	currentMarkSheet: map(config.currentMarkSheet, ({ text }) => text),
	passCount: 0,
	failCount: 0,
};

export default seed;
