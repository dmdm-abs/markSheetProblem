import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import React from 'react';
import config from '../core/config';

const MarkSheetTableHeader = () => <thead>
	<tr>
		{values(map(config.markSheetHeader, (header, index) =>
			<th key={ index }>{header}</th>))}
	</tr>
</thead>;

export default MarkSheetTableHeader;
