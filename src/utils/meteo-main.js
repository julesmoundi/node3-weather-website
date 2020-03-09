const getCordinates = require('./meteo-cordinates');
const getPrevision = require('./meteo-prevision');
const displayText = require('./meteo-display');

const getMeteo = (place, callback) => {
  getCordinates(place, (error, place_data) => {
    let place_meteo;
    
    if (error) {
      return callback(error);
    }

    getPrevision(error,
      place_data,
      (error, prevision) => {
        if (!error) {
          place_meteo = { ...place_data, ...prevision, ...displayText({...place_data, ...prevision}) };
        }
        return callback(error, place_meteo);
      }
    );
  });
};

module.exports = getMeteo;
