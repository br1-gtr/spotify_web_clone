import React from 'react';
import '../style/DisplayControl.css';
import {
	AiFillPlayCircle,
	AiFillStepBackward,
	AiFillStepForward,
} from 'react-icons/ai';
import { FaRandom } from 'react-icons/fa';
import { ImLoop } from 'react-icons/im';
import { useState } from 'react';

export const DisplayControl = () => {
	const sizeIcon = {
		playStop: 50,
		step: 30,
		randomLoop: 16,
	};
	const timeMax = 200; // revisar round con "220"

	const [rangeTime, setRangeTime] = useState(0);

	const timeLineHandler = (evt) => {
		//Control de Slider Tiempo
		setRangeTime(evt.target.value);
	};

	const setTimeFormat = (time) => {
		//Formato de segundos a mm:ss
		const minutes = Math.round(time / 60); //revisar
		const seconds = time % 60;
		return `0${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
	};
	//console.log(setTimeFormat(200));
	return (
		<div className="display-control">
			<div className="display-control_dashboard">
				<FaRandom size={sizeIcon.randomLoop} />
				<AiFillStepBackward size={sizeIcon.step} />
				<AiFillPlayCircle size={sizeIcon.playStop} />
				<AiFillStepForward size={sizeIcon.step} />
				<ImLoop size={sizeIcon.randomLoop} />
			</div>
			<div className="display-control_timeline">
				<p>{setTimeFormat(rangeTime)}</p>
				<input
					type="range"
					min="0"
					max="200"
					value={rangeTime}
					onChange={timeLineHandler}
				/>
				<p>{setTimeFormat(timeMax)}</p>
			</div>
		</div>
	);
};
