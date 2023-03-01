import React from 'react';
import MarkSheetCreator from './MarkSheetCreator';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const MarkSheets = (context) =>
	<div>
		<MarkSheetCreator { ...context }/>
		<table border={ 5 }>
			<TableHeader { ...context }/>
			<TableBody { ...context }/>
		</table>
	</div>;

export default MarkSheets;
