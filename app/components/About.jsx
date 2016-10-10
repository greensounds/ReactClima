var React = require('react');

/*var About = React.createClass({
	render: function() {
		return(
			<h2>About</h2>
		)
	}
})*/

var About = (props) => {
	return (
		<div>
		<h2 className="text-center">Acerca</h2>
		<p>Esta aplicación te permitirá consultar el clima de cualquier ciudad del mundo</p>
		<p>Algunas de las herramientas utilizadas en este proyecto son: </p>
		<ul>
		<li><a href="https://github.com/facebook/react">React.js</a></li>
		<li><a href="https://openweathermap.org/">Open Weather Map</a></li>
		</ul>
		</div>
	)
}

module.exports = About;