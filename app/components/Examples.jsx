var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
		return(
			<div>
			<h2 className="text-center">Ejemplos</h2>
			<p>Aquí hay algunas ciudades para probar la aplicación</p>
			<ol>
				<li>
					<Link to="/?location=Mexico">Ciudad de México, MX</Link>
				</li>
				<li>
					<Link to="/?location=Toronto">Toronto, CA</Link>
				</li>
			</ol>
			</div>
		)
}

module.exports = Examples;