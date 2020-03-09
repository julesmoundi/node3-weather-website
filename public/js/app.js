const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const titre = document.querySelector('#titre');
const coordonnees = document.querySelector('#coordonees');
const prevision = document.querySelector('#prevision');


weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  const location = search.value;

  titre.textContent = 'Un instant...';
  coordonnees.textContent = '';
  prevision.textContent = '';


  fetch('http://localhost:3000/weather?address=' + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        return titre.textContent = data.error;
      }
      titre.textContent = data.place_meteo.lieuText;
      coordonnees.textContent = data.place_meteo.coordonneesText;
      prevision.textContent = data.place_meteo.previsionText;
      
    });
  });
});
