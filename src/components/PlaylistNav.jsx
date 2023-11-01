import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { BiLibrary } from 'react-icons/bi';
import '../style/PlaylistNav.css';
export const PlaylistNav = () => {
	const iconSize = 24;
	return (
		<div className="playlist">
			<div className="playlist_home">
				<div className="playlist_home-init">
					<AiOutlineHome size={iconSize} />
					<p>Inicio</p>
				</div>
				<div className="playlist_home-search">
					<FaSearch size={iconSize} />
					<p>Buscar</p>
				</div>
			</div>
			<div className="playlist_data">
				<div className="playlist_data-header">
					<BiLibrary size={iconSize} />
					<p>Tu biblioteca</p>
				</div>
			</div>
		</div>
	);
};
