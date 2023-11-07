import './App.css';
import { NavControl } from './components/NavControl';
import { PlaylistNav } from './components/PlaylistNav';
import data from '../src/data.js';
function App() {
	//console.log(data);
	return (
		<div>
			<PlaylistNav />

			{/*<NavControl />*/}
			{data.map((obj) => (
				<div>
					<img src={`${obj.img}`} alt={obj.cd} />
					<div>
						<div>
							<p>{obj.cd}</p>
							<p>Album - {obj.artist}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default App;
