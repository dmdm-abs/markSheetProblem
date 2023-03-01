import { React } from 'react';
import './App.scss';
import MarkSheets from './components/MarkSheets';

const App = (context) => <div className="App">
	<MarkSheets { ...context }/>
</div>;

export default App;
