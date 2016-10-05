var React = require('react');

var WeatherMessage = ({temp, location})=> {
		return(
			<div>
				<h2>La temperatura es {temp} en {location}</h2>
			</div>	
		)
}



module.exports =WeatherMessage;