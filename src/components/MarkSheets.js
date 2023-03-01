import React from 'react';
import MarkSheetTableBody from './MarkSheetTableBody';
import MarkSheetTableHeader from './MarkSheetTableHeader';

const MarkSheets = (context) =>
	<div>
		<table border={ 5 }>
			<MarkSheetTableHeader { ...context }/>
			<MarkSheetTableBody { ...context }/>
		</table>
	</div>;

export default MarkSheets;
