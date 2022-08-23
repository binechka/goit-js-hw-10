import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const fetchCountries = (name) => {

    return fetch(`https://restcountries.com/v3.1/name/${name}/?fields=name,capital,currencies,population,languages,flags`)
        .then(r => {
            if (!r.ok) {
    Notify.failure('Oops, there is no country with that name');
} return r.json()
        })
        
    
}


// (r => r.json()).then(data => data)