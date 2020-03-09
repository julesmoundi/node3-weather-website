const request = require('request');

const getCordinates = (place, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(place) +
    '.json?access_token=pk.eyJ1IjoianVsZXNtb3VuZGkiLCJhIjoiY2s3Ymtmbm9sMGVobDNmbno5dDlnYzNsaCJ9.9S9vK81EPg2-lOYmnm14Mw&limit=1&language=fr';

  request({ url, json: true }, (error, {body}) => {
    let errorMessage;
    let place_data;

    if (error) {
      errorMessage = 'Impossible de se connecté au service de localisation !';
    } else if (body.features.length === 0) {
      errorMessage = 'Localisation inconnue, essayez en une autre !';
    } else {
      const result = body.features[0];
      place_data = {
        place_name: result.place_name,
        longitude: result.center[0],
        latitude: result.center[1]
      };
    }
    callback(errorMessage, place_data);
  });
}


module.exports = getCordinates;