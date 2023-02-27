import React from 'react';
import markSheet from '../services/MarkSheet';
import markSheetData from '../data/markSheetData';

const MarkSheetTableBody = () =>
	markSheet(markSheetData).map((student, key) =>
		<tr key={ key }>
			<td>{student['roll no']}</td>
			<td>{student.name}</td>
			<td>{student.tamil}</td>
			<td>{student.english}</td>
			<td>{student.maths}</td>
			<td>{student.science}</td>
			<td>{student.social}</td>
			<td>{student.total}</td>
			<td>{student.result}</td>
			<td>{student.rank}</td>
		</tr>);

export default MarkSheetTableBody;
