import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import React from 'react';
import Inputs from './Inputs';

const TableHeader = (context) => {
	const { config: { markSheetHeader }} = context;

	return <thead>
		<tr>

			{values(map(markSheetHeader, (header, key) =>
				<span>
					<th key={ key }>{header}</th>
					<tr>
						<Inputs { ...context }/>
					</tr>
				</span>))}
		</tr>

	</thead>;
};

export default TableHeader;
