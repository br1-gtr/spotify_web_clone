import React from 'react';
import '../style/PlaylistDetail.css';

export const PlaylistDetail = ({ data }) => {
	console.log(data);
	return (
		<div className="playlist-detail">
			{data.map((album) => (
				<div id={album.cd} className="playlist-detail_item">
					<img
						src={`${album.img}`}
						alt={album.cd}
						className="playlist-detail_item_img"
					/>
					<div className="playlist-detail_item_info">
						<p className="playlist-detail_item_info-album">{album.cd}</p>
						<p className="playlist-detail_item_info-artist">
							Album - {album.artist}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};
