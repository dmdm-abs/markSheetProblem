import React from 'react';
import { map, values } from '@laufire/utils/collection';
import processMarkSheets from '../../services/processMarkSheets';
import Inputs from './Inputs';

const TableBody = (context) =>
	<tbody>
		<Inputs { ...context }/>
		{map(processMarkSheets(context), (markSheet, index) =>
			<tr key={ index }>
				{values(map(markSheet, (value, key) =>
					<td
						key={ key }
						className={ key === 'result'
							? value === 'pass'
								? 'pass'
								: 'fail'
							: '' }
					>
						{value}</td>))}
			</tr>)}

	</tbody>;

export default TableBody;
