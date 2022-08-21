inputEl=document.querySelector("#search-box"),inputEl.addEventListener("input",(function(e){return e.preventDefault(),console.log(inputEl.value),e=inputEl.value,fetch("https://restcountries.com/v3.1/name/".concat(e,"/?fields=name,capital,currencies,languages,flags")).then((function(e){return e.json()})).then(console.log)}));
//# sourceMappingURL=index.4498af8b.js.map
