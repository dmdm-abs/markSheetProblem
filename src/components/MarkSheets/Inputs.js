import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import React from 'react';
import Input from './Input';

const Inputs = (context) => {
	const { state: { currentMarkSheet }} = context;

	return <tr>
		{values(map(currentMarkSheet, (input, header) =>
			<Input
				key={ header }
				{ ...{ ...context,
					data: { input, header }} }
			/>))}
	</tr>;
};

export default Inputs;
