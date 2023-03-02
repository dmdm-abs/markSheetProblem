import React from 'react';
import Button from './Button';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const MarkSheets = (context) =>
	<div>

		<table border={ 5 }>
			<TableHeader { ...context }/>
			<Button { ...context }/>
			<TableBody { ...context }/>
		</table>
	</div>;

export default MarkSheets;
