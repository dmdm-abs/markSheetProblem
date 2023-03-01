import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import React from 'react';

const TableHeader = ({ config: { markSheetHeader }}) => <thead>
	<tr>
		{values(map(markSheetHeader, (header, index) =>
			<th key={ index }>{header}</th>))}
	</tr>
</thead>;

export default TableHeader;