import React from 'react';
import { useState } from 'react';
import { MdDevices } from 'react-icons/md';
import { RxSpeakerLoud, RxSpeakerModerate, RxSpeakerOff } from 'react-icons/rx';
import '../style/PanelControl.css';
import '../style/range_input.css';
export const PanelControl = () => {
	const [levelSound, setLevelSound] = useState(0);
	const levelHandler = (evt) => {
		//console.log(evt.target.value);
		setLevelSound(evt.target.value);
	};
	const sizeIcon = 20;
	return (
		<div className="panel-control">
			<MdDevices size={sizeIcon} />
			<div className="panel-control_level-icon">
				{levelSound < 5 ? (
					<RxSpeakerOff color="brown" size={sizeIcon} />
				) : levelSound < 50 ? (
					<RxSpeakerModerate size={sizeIcon} />
				) : (
					<RxSpeakerLoud size={sizeIcon} />
				)}
			</div>
			<input
				className="range_input"
				type="range"
				min="0"
				max="100"
				value={levelSound}
				onChange={levelHandler}
			/>
		</div>
	);
};
