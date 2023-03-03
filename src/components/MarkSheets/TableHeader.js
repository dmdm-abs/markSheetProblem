import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import React from 'react';

const TableHeader = (context) => {
	const { config: { markSheetHeader }} = context;

	return <thead>
		<tr>
			{values(map(markSheetHeader, (header, key) =>
				<th key={ key }>{header}</th>))}
		</tr>
	</thead>;
};

export default TableHeader;
