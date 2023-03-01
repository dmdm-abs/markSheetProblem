import React from 'react';
import CreateMarkSheet from './CreateMarkSheet';
import MarkSheetTableBody from './MarkSheetTableBody';
import MarkSheetTableHeader from './MarkSheetTableHeader';

const MarkSheets = () =>
	<div>
		<CreateMarkSheet/>
		<table border={ 5 }>
			<MarkSheetTableHeader/>
			<MarkSheetTableBody/>
		</table>
	</div>;

export default MarkSheets;
