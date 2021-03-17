fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')

    countries.forEach(country => {

        const countryDiv = document.createElement('div');
        countryDiv.className = "country"

        const countryInfo = `
          <h3 class ="country-name">${country.name}</h3>
          <p class ="country-cap">${country.capital}</p>
          <p class ="country-pop">${country.population}</p>
          <button onclick ="displayCountryDetail('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}
const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
}

const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetail')
    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <p class ="country-pop">${country.area}</p>
    <img src="${country.flag}">
    `
}

    

    




























// fetch(`https://restcountries.eu/rest/v2/all`)
//     .then(res => res.json())
//     .then(data => displayCountries(data));

// const displayCountries = countries => {
//     const countriesDiv = document.getElementById('countries')

//     countries.forEach(country => {

//         const countryDiv = document.createElement('div');
//         countryDiv.className = "country"

//         const countryInfo = `
//           <h3 class ="country-name">${country.name}</h3>
//           <p class ="country-cap">${country.capital}</p>
//           <p class ="country-pop">${country.population}</p>
//         `
//         countryDiv.innerHTML = countryInfo;
//         countriesDiv.appendChild(countryDiv);
//     });
// }







    //hard copy//

    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];

    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = "country"

    //     const countryInfo = `
    //     <h3 class ="country-name">${country.name}</h3>
    //     <p class ="country-cap">${country.capital}</p>
    //     <p class ="country-pop">${country.population}</p>
    //     `

    // const h3 = document.createElement('h3')
    // h3.innerText = country.name;
    // countryDiv.appendChild(h3);

    // const p = document.createElement('p');
    // p.innerText = country.capital;
    // countryDiv.appendChild(p);

    // const tk = document.createElement('h6');
    // tk.innerText = country.nativeName;
    // countryDiv.appendChild(tk);
