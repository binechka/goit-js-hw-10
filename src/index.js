import './css/styles.css';
import { fetchCountries } from './fetchCountries.js'
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector("#search-box")
const countryList = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

function onSearch(e) {
    e.preventDefault(); 
    if (e.target.value.trim() !== "") {
        fetchCountries(e.target.value.trim()).then(data => {
               
            
            if (data.length > 10) {
   return Notify.info("Too many matches found. Please enter a more specific name.");
}

            if (data.length >= 2 && data.length <= 10) {
                countryList.innerHTML = data.map(({name, flags}) => {
                    return   `<li>
  <img src="${flags.svg}" alt="${name.official}" width="30" height="25">
  <p>${name.official}</p>
</li>`
    }).join("")
   
            }
            else {
               countryList.innerHTML = ""  
            }

if (data.length === 1) {
    countryInfo.innerHTML = data.map(({ flags, name, capital, population, languages}) => {
        return `<h2><img src="${flags.svg}" alt="${name.official}" width="30" height="25">
       ${name.official}</h2>
    <ul>
    <li>Capital:${capital}</li>
    <li>Population:${population}</li>
    <li>Languages:${Object.values(languages)}</li>
    </ul>
    `
    }).join("")
    
}
            else {
               countryInfo.innerHTML = ""  
            }
        }).catch((error) => {
            Notify.failure('Qui timide rogat docet negare');
        })
        
    }
    }


inputEl.addEventListener("input", debounce(onSearch,DEBOUNCE_DELAY))

