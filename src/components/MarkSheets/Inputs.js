import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import React from 'react';
import Button from './Button';
import Input from './Input';

const Inputs = (context) => {
	const { state: { currentMarkSheet }} = context;

	return <tr>
		{values(map(currentMarkSheet, (input, key) =>
			<Input
				key={ key }
				{ ...{ ...context,
					data: { input, key }} }
			/>))}
		<td><Button { ...context }/></td>
	</tr>;
};

export default Inputs;
