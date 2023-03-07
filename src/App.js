import { React } from 'react';
import './App.scss';
import MarkSheets from './components/MarkSheets';

const App = (context) => {
	const { state: { passCount, failCount }} = context;

	return <div className="App">
		<MarkSheets { ...context }/>
		<div>
			<div>Pass Count: {passCount}</div>
			<div>Fail Count: {failCount}</div>
		</div>
	</div>;
};

export default App;
