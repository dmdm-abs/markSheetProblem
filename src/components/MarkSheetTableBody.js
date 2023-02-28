import React from 'react';
import markSheet from '../services/MarkSheet';
import markSheetData from '../data/markSheetData';
import { map, values } from '@laufire/utils/collection';

const MarkSheetTableBody = () =>
	map(markSheet(markSheetData), (student, index) =>
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
