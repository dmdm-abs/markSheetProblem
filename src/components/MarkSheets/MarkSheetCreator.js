import React from 'react';

const MarkSheetCreator = (context) => {
	const { actions } = context;

	return <form>
		<input
			type="text"
			name="rollNo"
			id="rollNo"
			placeholder="Enter your roll no: "
			onChange={ ({ target: { value }}) => actions.changeRollNo(value) }
		/>
		<button
			type="submit"
			onClick={ (e) => actions.getMarkSheet(e) }
		>Submit</button>
	</form>;
}
	;

export default MarkSheetCreator;
