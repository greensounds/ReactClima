var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=006782dbb52bd47fd4a1668fca0711d6&units=metric';

//API Key
//006782dbb52bd47fd4a1668fca0711d6

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${ OPEN_WEATHER_MAP_URL }&q=^${encodedLocation}`;

		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (res){
			throw new Error(res.data.message);
		});
	}
}