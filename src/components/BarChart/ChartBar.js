import React from 'react';
import './ChartBar.css';

const ChartBar = (props) =>{

	let rainfall = '0%';
	if(props.RainFallLevelInCm > 0){
		rainfall =Math.round(props.RainFallLevelInCm/props.MaxRainFall*100) + '%'
	}

	return(
		<div className='chart-bar'>
		<div className='chart-bar__inner'>
		<div className='chart-bar__fill' style={{height:rainfall}}></div>
		</div>
		<div className='chart-bar__label'>{props.City} ({props.RainFallLevelInCm}cm)</div>
		</div>
		);
};

export default ChartBar;