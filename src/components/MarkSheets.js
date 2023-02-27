import React from 'react';
import MarkSheetTableBody from './MarkSheetTableBody';

const MarkSheets = () =>
	<table border={ 5 }>
		<thead>
			<tr>
				<th>roll no</th>
				<th>name</th>
				<th>tamil</th>
				<th>english</th>
				<th>maths</th>
				<th>science</th>
				<th>social</th>
				<th>total</th>
				<th>result</th>
				<th>rank</th>
			</tr>
		</thead>
		<tbody>
			<MarkSheetTableBody/>
		</tbody>
	</table>;

export default MarkSheets;
