const request = require('request');

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/022c7d5f24defd84d30388e9ccfae150/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};

module.exports = {
  getWeather
}
