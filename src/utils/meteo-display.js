const display = ({
  place_name,
  latitude,
  longitude,
  summary,
  temperatureMax,
  temperatureMin,
  temperature,
  precipProbability
  
}) => {
  return {
    lieuText: lieu({ place_name }),
    coordonneesText: coordonnees({ latitude, longitude }),
    previsionText: prevision({ summary, temperatureMax, temperatureMin, temperature, precipProbability })
  };
};

const lieu = ({ place_name } = {}) => {
  let displayMessage = 'Lieu : ' + place_name;
  return displayMessage;
};

const coordonnees = ({ latitude, longitude } = {}) => {
  let displayMessage =
    'Coordonnées : [Latitude : ' +
    latitude +
    ', Longitude : ' +
    longitude +
    ']';
  return displayMessage;
};

const prevision = ({ summary, temperatureMax, temperatureMin, temperature, precipProbability } = {}) => {
  let displayMessage =
    "Aujourd'hui, " +
    summary +
    ' Il fait actuellement ' +
    temperature +
    '°C dehors. Il y a ' +
    precipProbability +
    '% de chance de pleuvoir.' +
    ' La maximale sera : ' + temperatureMax + '°C.' +
    ' La minimale sera : ' + temperatureMin + '°C.';
  return displayMessage;
};

module.exports = display;
