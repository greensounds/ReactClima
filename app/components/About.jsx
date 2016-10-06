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
		<h3>Acerca</h3>
		<p>Esta aplicación te permitirá consultar el clima de cualquier ciudad del mundo</p>
		</div>
	)
}

module.exports = About;