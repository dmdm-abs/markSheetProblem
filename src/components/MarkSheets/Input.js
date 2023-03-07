import { peek } from '@laufire/utils/debug';
import React from 'react';

const Input = (context) => {
	const { actions,
		config: { currentMarkSheet }
		, data: { input, key }} = context;

	peek(key, 'key-header');
	return <td>
		<input
			type={ currentMarkSheet[key].type }
			value={ input }
			className="input"
			onChange={ ({ target: { value }}) =>
				actions.setValue({ key, value }) }
		/>
	</td>;
};

export default Input;
