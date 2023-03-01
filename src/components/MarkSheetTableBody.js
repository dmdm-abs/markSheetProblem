import React from 'react';
import { map, values } from '@laufire/utils/collection';
import config from '../core/config';
import processMarkSheets from '../services/MarkSheet';

const MarkSheetTableBody = () =>
	map(processMarkSheets(config.markSheets), (markSheet, index) =>
		<tbody key={ index }>
			<tr>
				{values(map(markSheet, (value, key) =>
					<td
						key={ key }
						className={ key === 'result'
							? value === 'pass'
								? 'passedStudent'
								: 'failedStudent'
							: '' }
					>
						{value}</td>))}
			</tr>
		</tbody>);

export default MarkSheetTableBody;
