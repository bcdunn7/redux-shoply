import './App.css';
import Routes from './Routes';

import { BrowserRouter } from 'react-router-dom';

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<h1>Shoply</h1>
				<BrowserRouter>
					<Routes/>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
