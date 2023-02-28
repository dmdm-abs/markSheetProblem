import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import React from 'react';
import { data } from '../data/markSheetData';

const MarkSheetTableHeader = () => <thead>
	<tr>
		{values(map(data, (details, index) =>
			<th key={ index }>{details}</th>))}
	</tr>
</thead>;

export default MarkSheetTableHeader;
