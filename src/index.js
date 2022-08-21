import './css/styles.css';
import { fetchCountries } from './fetchCountries.js'
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box")
const countryList = document.querySelector(".country-list")
const countryinfo = document.querySelector(".country-info")

function onSearch(e) {
    e.preventDefault(); 
    if (e.target.value.trim() !== "") {
    fetchCountries(e.target.value.trim())
}
    }


inputEl.addEventListener("input", debounce(onSearch,DEBOUNCE_DELAY))

if (data.length > 10) {
   return Notify.info("Too many matches found. Please enter a more specific name.");
}

if (2 < data.length < 10) {
    return countryList.innerHTML = `<li>${flags} ${name}</li>`
}

if (data.length === 1) {
    return countryinfo.innerHTML = `<h2>${flags} ${name}</h2>
    <ul>
    <li>Capital:${capital}</li>
    <li>Population:${population}</li>
    <li>Languages:${languages}</li>
    </ul>
    `
}