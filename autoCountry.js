const countryName = new URLSearchParams(location.search).get('name')
let name = document.querySelector('.country-name')
let population = document.querySelector('.population')
let region = document.querySelector('.region')
let subRegion = document.querySelector('.sub-region')
let capital = document.querySelector('.capital')
let currencies = document.querySelector('.currencies')
let languages = document.querySelector('.languages')
let currencySymbol = document.querySelector('.currencies-symbol')

fetch(`https://restcountries.com/v3.1/name/${countryName}`).
then(res=>res.json()).
then(([country])=> {
    console.log(country)
    name.innerText = country?.name?.common
    population.innerText = country?.population.toLocaleString('en-IN')
    region.innerText = country?.region
    subRegion.innerText = country?.subregion
    // capital.innerText = country?.capital
    // currencies.innerText = country?.currencies.GTQ.name
    // currencySymbol.innerText = `(${country?.currencies.GTQ.symbol})`
    languages.innerText = Object.values(country?.languages)[0]

    console.log(name)
    
})