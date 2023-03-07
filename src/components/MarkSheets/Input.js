import { peek } from '@laufire/utils/debug';
import React from 'react';

const Input = (context) => {
	const { actions,
		config: { currentMarkSheet }
		, data: { input, header }} = context;

	peek(header);
	return <td>
		<input
			type={ currentMarkSheet[header].type }
			value={ input }
			className="input"
			onChange={ ({ target: { value }}) =>
				actions.setValue({ ...context, data: { header, value }}) }
		/>
	</td>;
};

export default Input;
