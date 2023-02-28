import React from 'react';
import MarkSheetTableBody from './MarkSheetTableBody';
import MarkSheetTableHeader from './MarkSheetTableHeader';

const MarkSheets = () =>
	<table border={ 5 }>
		<MarkSheetTableHeader/>
		<MarkSheetTableBody/>
	</table>;

export default MarkSheets;
