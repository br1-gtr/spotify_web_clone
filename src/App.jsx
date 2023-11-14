import './App.css';
import { NavControl } from './components/NavControl';
import { PlaylistNav } from './components/PlaylistNav';
import { PlaylistPage } from './components/PlaylistPage';
import data from './data.js';
function App() {
	//console.log(data);
	return (
		<div>
			<div className="playlist_main">
				<PlaylistNav />
				<PlaylistPage data={data} />
			</div>
			<NavControl />
		</div>
	);
}

export default App;
