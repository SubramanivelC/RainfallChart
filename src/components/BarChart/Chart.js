import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = () =>{

	const datas = [
		{city:'Channai', RainFallLevelInCm:350},
		{city:'Delhi', RainFallLevelInCm:210},
		{city:'Bangalore', RainFallLevelInCm:270},
		{city:'Kochi', RainFallLevelInCm:280},
	]
	const RainFallArryData = datas.map(data => data.RainFallLevelInCm);
	const MaxRainFall = Math.max(...RainFallArryData);

	return(
		<div className='title'><h1>RAINFALL DATA (2019-2020)</h1>
		<div className='chart'>{
		datas.map((data) => <ChartBar key={data.city} MaxRainFall={MaxRainFall} City={data.city} RainFallLevelInCm={data.RainFallLevelInCm}/>)
		}
		</div>
		</div>
		);
};

export default Chart;