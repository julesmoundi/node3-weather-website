const request = require('request');

const getPrevision = (error, {latitude, longitude} = {}, callback) => {
  
  if(error) {
    return callback(error);
  }

  const url =
    'https://api.darksky.net/forecast/873ae9e34b490680c4c34c3fdc2d6de0/' +
    encodeURIComponent(latitude) +
    ',' +
    encodeURIComponent(longitude) +
    '?units=si&lang=fr';

  request({ url, json: true }, (error, {body}) => {
    let errorMessage;
    let prevision;

    if (error) {
      errorMessage = 'Impossible de se connecté au service de météo';
    } else if (body.error) {
      errorMessage = body.error;
    } else {
      const {currently, daily} = body;
      prevision = {
        summary: daily.data[0].summary,
        temperature: currently.temperature,
        precipProbability: currently.precipProbability
      };
    }

    callback(errorMessage, prevision);
  });
};

module.exports = getPrevision;
