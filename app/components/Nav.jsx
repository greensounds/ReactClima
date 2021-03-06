var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass ({
	onSearch: function(e) {
		e.preventDefault();
		var location = this.refs.buscar.value;
		//alert(location);
		var encodedLocation = encodeURIComponent(location);

		if(location.length > 0) {
			this.refs.buscar.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}

		//alert('Espera');
	},
	render: function() {
	return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">ClimApp</li>
						<li>
						<IndexLink to="/" activeClassName = "active" activeStyle = {{fontWeight: 'bold'}}>Buscar Clima</IndexLink>
						</li>
						<li>
						<Link to="/about" activeClassName = "active" activeStyle = {{fontWeight: 'bold'}}>Acerca</Link>
						</li>
						<li>
						<Link to="/examples" activeClassName = "active" activeStyle = {{fontWeight: 'bold'}}>Ejemplos</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Busca el clima de tu ciudad" ref="buscar"/>
							</li>
							<li>
								<input type="submit" className="button" value="Buscar"/>
							</li>
						</ul>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = Nav;

