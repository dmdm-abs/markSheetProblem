import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const MarkSheets = (context) =>
	<div>
		<table border={ 1 }>
			<TableHeader { ...context }/>
			<TableBody { ...context }/>
		</table>
	</div>;

export default MarkSheets;
