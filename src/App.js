import { React } from 'react';
import './App.scss';
import markSheet from './services/MarkSheet';
import markSheetData from './data/markSheetData';

// eslint-disable-next-line max-lines-per-function
const App = () => <div className="App">
	<table border={ 5 }>
		<thead>
			<tr>
				<th>roll no</th>
				<th>name</th>
				<th>tamil</th>
				<th>english</th>
				<th>maths</th>
				<th>science</th>
				<th>social</th>
				<th>total</th>
				<th>result</th>
				<th>rank</th>
			</tr>
		</thead>
		<tbody>
			{
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
					</tr>)
			}
		</tbody>
	</table>
</div>;

export default App;
