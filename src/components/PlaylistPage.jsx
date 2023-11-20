import React from 'react';
import '../style/PlaylistPage.css';
import { useParams } from 'react-router-dom';

export const PlaylistPage = ({ data }) => {
	const { albumName } = useParams();
	const album = data.find((album) => album.cd === albumName); //busca album desde param
	//console.log(album);
	return (
		<div className="playlistpage">
			<div className="playlistpage_baner">
				<div className="playlistpage_baner-header"></div>

				<div className="playlistpage_baner-main">
					<img src={`${album.img}`} alt={`${album.cd}`} className="baner-img" />
					<div>
						<p>Album</p>
						<p>{album.cd}</p>
						<p>{album.artist}</p>
					</div>
				</div>
			</div>

			<div className="playlistpage_data">
				{album.songs.map((cd) => {
					return (
						<div className="playlistpage_data-song">
							{console.log(cd.name)}
							<p>{cd.name}</p>
							<p>{cd.time}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
