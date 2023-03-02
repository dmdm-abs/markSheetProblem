import React from 'react';

const Input = (context) => {
	const { actions, data: { input, header }} = context;

	return <td>
		<input
			type="text"
			value={ input }
			className="input"
			onChange={ ({ target: { value }}) =>
				actions.setValue({ value, header }) }
		/>
	</td>;
};

export default Input;
