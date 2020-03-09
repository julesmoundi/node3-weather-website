const display = ({
  place_name,
  latitude,
  longitude,
  summary,
  temperature,
  precipProbability
}) => {
  return {
    lieuText: lieu({ place_name }),
    coordonneesText: coordonnees({ latitude, longitude }),
    previsionText: prevision({ summary, temperature, precipProbability })
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

const prevision = ({ summary, temperature, precipProbability } = {}) => {
  let displayMessage =
    "Aujourd'hui, " +
    summary +
    ' Il fait actuellement ' +
    temperature +
    '°C dehors. Il y a ' +
    precipProbability +
    '% de chance de pleuvoir.';
  return displayMessage;
};

module.exports = display;
