import React from 'react';
import markSheet from '../services/MarkSheet';
import { map, values } from '@laufire/utils/collection';
import config from '../core/config';

const MarkSheetTableBody = () =>
	map(markSheet(config.markSheetData), (student, index) =>
		<tbody key={ index }>
			<tr>
				{values(map(student, (details, key) =>
					<td
						key={ key }
						className={ key === 'result'
							? details === 'pass'
								? 'greenColor'
								: 'redColor'
							: '' }
					>
						{details}</td>))}
			</tr>
		</tbody>);

export default MarkSheetTableBody;
