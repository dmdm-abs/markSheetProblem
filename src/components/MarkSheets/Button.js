import React from 'react';

const Button = (context) => {
	const { actions: { getMarkSheet, setCount }} = context;

	return (
		<button
			onClick={ () => {
				getMarkSheet();
				setCount();
			} }
		>Submit</button>);
}
	;

export default Button;
