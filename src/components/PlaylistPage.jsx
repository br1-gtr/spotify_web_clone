import React from 'react';
import '../style/PlaylistPage.css';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaPlay, FaClock } from 'react-icons/fa';
export const PlaylistPage = ({ data }) => {
	const { albumName } = useParams();
	const album = data.find((album) => album.cd === albumName); //busca album desde param
	console.log(album.img);
	return (
		<div className="playlistpage">
			<div className="playlistpage_baner">
				<div className="playlistpage_baner-header"></div>

				<div className="playlistpage_baner-main">
					<img src={album.img} alt={album.cd} className="baner-img" />
					<div>
						<p>Album</p>
						<p>{album.cd}</p>
						<p>{album.artist}</p>
					</div>
				</div>
			</div>

			<table className="playlistpage_data" border={'border'}>
				<thead>
					<tr>
						<th>#</th>
						<th>Titulo</th>
						<th>Reproducciones</th>
						<th>
							<FaClock />
						</th>
						<th>Fav?</th>
					</tr>
				</thead>
				<tbody>
					{album.songs.map((cd, index) => {
						return (
							<tr className="playlistpage_data-song" id={cd.name}>
								{/*console.log(cd.name)*/}
								<td className="table_index-play">
									{index + 1}
									<FaPlay size={20} className="song_play-icon" />
								</td>
								<td className="table_song-artist">
									<p className="table_band-artist-song">{cd.name}</p>
									<p>{album.artist}</p>
								</td>
								<td>11.001.405</td>
								<td>{cd.time}</td>
								<td>
									<AiOutlineHeart />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
