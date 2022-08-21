import './css/styles.css';
import { fetchCountries } from './fetchCountries.js'
const DEBOUNCE_DELAY = 300;
inputEl = document.querySelector("#search-box")




inputEl.addEventListener("input", fetchCountries)
