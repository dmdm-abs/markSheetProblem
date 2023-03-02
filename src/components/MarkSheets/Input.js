import React from 'react';

const Input = (context) => {
	const { actions, data: { input, header }} = context;

	return <div>
		<span>{header}:</span>
		<input
			type="text"
			value={ input }
			onChange={ ({ target: { value }}) =>
				actions.setValue({ value, header }) }
		/>
	</div>;
};

export default Input;
