import './App.css';
import { NavControl } from './components/NavControl';
import { PlaylistNav } from './components/PlaylistNav';
import { PlaylistPage } from './components/PlaylistPage';
import data from './data.js';
import { Routes, Route } from 'react-router-dom';
function App() {
	//console.log(data);
	return (
		<div>
			<div className="playlist_main">
				<PlaylistNav />
				<Routes>
					<Route
						path="/album/:albumName"
						element={<PlaylistPage data={data} />}
					/>
				</Routes>
			</div>
			<NavControl />
		</div>
	);
}

export default App;
