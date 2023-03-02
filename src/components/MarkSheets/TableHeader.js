import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import React from 'react';
import Button from './Button';

const TableHeader = (context) => {
	const { config: { markSheetHeader }} = context;

	return <thead>
		<tr>
			{values(map(markSheetHeader, (header, key) =>
				<th key={ key }>{header}</th>))}
			<th><Button { ...context }/></th>
		</tr>
	</thead>;
};

export default TableHeader;
