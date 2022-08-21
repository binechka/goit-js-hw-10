inputEl=document.querySelector("#search-box"),inputEl.addEventListener("input",(e=>(e.preventDefault(),console.log(inputEl.value),e=inputEl.value,fetch(`https://restcountries.com/v3.1/name/${e}/?fields=name,capital,currencies,languages,flags`).then((e=>e.json())).then(console.log))));
//# sourceMappingURL=index.86182007.js.map
