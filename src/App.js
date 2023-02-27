import { peek } from '@laufire/utils/debug';
import { React } from 'react';
import './App.scss';
import markSheet from './services/MarkSheet';

const App = () => {
	peek(markSheet());
	return <div className="App"/>;
};

export default App;
