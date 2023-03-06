import { map } from '@laufire/utils/collection';
import React from 'react';

const TableHeader = (context) => {
	const { config: { markSheetHeader }} = context;

	return <thead>
		<tr>
			{map(markSheetHeader, (header, key) =>
				<th key={ key }>{header}</th>)}
		</tr>
	</thead>;
};

export default TableHeader;
