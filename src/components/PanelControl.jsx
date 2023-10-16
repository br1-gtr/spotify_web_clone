import React from 'react';
import { MdDevices } from 'react-icons/md';
import { RxSpeakerLoud, RxSpeakerModerate, RxSpeakerOff } from 'react-icons/rx';
export const PanelControl = () => {
	return (
		<div>
			<MdDevices />
			<RxSpeakerLoud />
			{/*<RxSpeakerModerate />
    <RxSpeakerOff />*/}
			<input type="range" />
		</div>
	);
};
