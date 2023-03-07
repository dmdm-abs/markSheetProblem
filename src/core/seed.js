import { map } from '@laufire/utils/collection';
import config from './config';

const seed = {
	markSheets: [],
	currentMarkSheet: map(config.currentMarkSheet, ({ text }) => text),
};

export default seed;
