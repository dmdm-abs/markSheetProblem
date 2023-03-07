import React from 'react';

const Input = (context) => {
	const { actions: { setValue },
		config: { currentMarkSheet }
		, data: { input, key }} = context;

	return <td>
		<input
			type={ currentMarkSheet[key].type }
			value={ input }
			className="input"
			onChange={ ({ target: { value }}) =>
				setValue({ key: key,
					value: currentMarkSheet[key].convertor(value) }) }
		/>
	</td>;
};

export default Input;
