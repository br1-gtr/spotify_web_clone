import React from 'react';
import '../style/PlaylistPage.css';
export const PlaylistPage = ({ data }) => {
	return (
		<div className="playlistpage">
			<div className="playlistpage_baner">
				<div className="playlistpage_baner-header"></div>

				<div className="playlistpage_baner-main">
					<img
						src={`${data[0].img}`}
						alt={`${data[0].cd}`}
						className="baner-img"
					/>
					<div>
						<p>Album</p>
						<p>{data[0].cd}</p>
						<p>{data[0].artist}</p>
					</div>
				</div>
			</div>

			<div className="playlistpage_data">
				{data[0].songs.map((cd) => {
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
