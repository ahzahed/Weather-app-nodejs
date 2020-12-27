const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=b835ae72dc4eba293da52a8f74a69a3f&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const {
        current: { temperature, precip },
      } = body;
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}, It is currently ${temperature} degress out. There is a ${precip}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
