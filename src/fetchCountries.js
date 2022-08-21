export const fetchCountries = (name) => {
    name.preventDefault();
    console.log(inputEl.value);
    name = inputEl.value;
return fetch(`https://restcountries.com/v3.1/name/${name}/?fields=name,capital,currencies,languages,flags`).then(r => r.json()).then(console.log)
}