import './index.css';
import { getCountries } from './api';

const form = document.querySelector('form');
const country = document.querySelector('#country');
const city = document.querySelector('#city');
const submitButton = document.querySelector('.btn');

country.addEventListener('change', async event => {
  if (event.target.value !== '') {
    city.disabled = false;

    let data = await getCountries();

    if (data) {
      let filteredData = data.filter(country => country.name === event.target.value)[0].cities;
      city.innerHTML = filteredData.map(city => `<option value="${city.name}">${city.name}</option>`);
    } else {
      city.innerHTML = '<option value="">Data is Loading...</option>';
    }
  } else {
  }
});

city.addEventListener('change', event => {
  if (event.target.value !== '') {
    submitButton.disabled = false;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Submitted: ', country.value, city.value);
  country.value = '';
  city.value = '';
  city.innerHTML = '<option value="" selected disabled hidden>Choose city first</option>';
  city.disabled = true;
  submitButton.disabled = true;
});
