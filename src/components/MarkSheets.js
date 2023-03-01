import React from 'react';
import MarkSheetTableBody from './MarkSheetTableBody';
import MarkSheetTableHeader from './MarkSheetTableHeader';

const MarkSheets = () =>
	<div>
		<table border={ 5 }>
			<MarkSheetTableHeader/>
			<MarkSheetTableBody/>
		</table>
	</div>;

export default MarkSheets;
