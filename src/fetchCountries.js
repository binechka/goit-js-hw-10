export const fetchCountries = (name) => {

    return fetch(`https://restcountries.com/v3.1/name/${name}/?fields=name,capital,currencies,languages,flags&limit=10`).then(r => r.json()).then(data=>console.log(data))
    
}


