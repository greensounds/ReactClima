var React = require('react');

var WeatherMessage = ({temp, location})=> {
		return(
			<div>
				<h2 className="text-center">La temperatura es {temp} °C en {location}</h2>
			</div>	
		)
}



module.exports =WeatherMessage;