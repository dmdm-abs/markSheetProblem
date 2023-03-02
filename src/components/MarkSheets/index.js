import React from 'react';
import Button from './Button';
import Inputs from './inputs';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const MarkSheets = (context) =>
	<div>
		<Inputs { ...context }/>
		<Button { ...context }/>
		<table border={ 5 }>
			<TableHeader { ...context }/>
			<TableBody { ...context }/>
		</table>
	</div>;

export default MarkSheets;
