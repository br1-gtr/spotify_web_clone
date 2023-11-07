import './App.css';
import { NavControl } from './components/NavControl';
import { PlaylistNav } from './components/PlaylistNav';

function App() {
	//console.log(data);
	return (
		<div>
			<PlaylistNav />

			<NavControl />
		</div>
	);
}

export default App;
