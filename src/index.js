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
    
    <p>Capital:${capital}<p>
    <p>Population:${population}<p>
    <p>Languages:${Object.values(languages)}<p>
    
    `
    }).join("")
    

    if (e.target.value.trim()=== "Russia" || e.target.value.trim()=== "russia") {
        alert("Ви впевнені, що хочете бачити цю хуйню?")
       countryInfo.innerHTML = data.map(({ flags, name, capital, population, languages}) => {
        return `<h2><img src="${flags.svg}" alt="${name.official}" width="30" height="25">
       ${name.official}</h2>
    
    <p>Capital:Хуєпітал<p>
    <p>Population:русня-їбана<p>
    <p>Languages:${Object.values(languages)}<p>
    
    `
    }).join("")
    }
}
            else {
               countryInfo.innerHTML = ""  
            }
        })
        
    }
    }


inputEl.addEventListener("input", debounce(onSearch,DEBOUNCE_DELAY))

