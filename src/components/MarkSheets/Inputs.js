import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import React from 'react';
import Input from './Input';

const Inputs = (context) => {
	const { state: { currentMarkSheet }} = context;

	return <div>
		{values(map(currentMarkSheet, (input, header) =>
			<Input
				key={ header }
				{ ...{ ...context,
					data: { input, header }} }
			/>))}
	</div>;
};

export default Inputs;
