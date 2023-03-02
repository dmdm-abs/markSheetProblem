import React from 'react';

const Button = (context) => {
	const { actions: { getMarkSheet }} = context;

	return <button onClick={ () => getMarkSheet(context) }>Submit</button>;
}
	;

export default Button;
