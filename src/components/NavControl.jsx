import React from 'react';
import '../style/NavControl.css';
import img_misfits from '../assets/img/misfits_img.jfif';
import { AiOutlineHeart } from 'react-icons/ai';
import { DisplayControl } from './DisplayControl.jsx';
import { PanelControl } from './PanelControl';
export const NavControl = () => {
	return (
		<div className="nav-control">
			<div className="nav-control_info-song">
				<img src={img_misfits} alt="imagen_band" className="info-song_img" />

				<div className="info-song_info">
					<p>Cancion</p>
					<p>Artista</p>
				</div>

				<AiOutlineHeart size={30} />
			</div>
			<DisplayControl />
			<PanelControl />
		</div>
	);
};
