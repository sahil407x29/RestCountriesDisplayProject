const countryName = new URLSearchParams(location.search).get('name')
let name = document.querySelector('.country-name')
let population = document.querySelector('.population')
let region = document.querySelector('.region')
let subRegion = document.querySelector('.sub-region')
let capital = document.querySelector('.capital')
let currencies = document.querySelector('.currencies')
let languages = document.querySelector('.languages')
let currencySymbol = document.querySelector('.currencies-symbol')
let borders = document.querySelector('.border-countries')
let flag = document.querySelector('.country-details img')

fetch(`https://restcountries.com/v3.1/name/${countryName}`).
then(res=>res.json()).
then(([country])=> {
    
    console.log(country)
    flag.src = country?.flags.svg
    name.innerText = country?.name?.common
    population.innerText = country?.population.toLocaleString('en-IN')
    region.innerText = country?.region
    subRegion.innerText = country?.subregion
    capital.innerText = country?.capital
    currencies.innerText = Object.values(country?.currencies).map(currencies=>currencies.name).join(',')
    // Object.values returns an array of objects so accesing name key for 1st index object
    currencySymbol.innerText = `(${Object.values(country?.currencies).map(currencies=>currencies.symbol)})`
    languages.innerText = Object.values(country?.languages)[0]
    const borderingCountries = country?.borders
    console.log(borderingCountries)

    fetch(`https://restcountries.com/v3.1/alpha?codes=${borderingCountries.join(",")}`).
    then(res=>res.json()).
    then((country)=> {
        // here [country] isnt used because country returns data for multiple countries and [0] only select fist countries data
        const names = country.map(country=>country.name.common)
        borders.innerHTML = names.map((data)=> 
              `<a href=country.html?name=${data}>${data}</a>`
        )
    })
    
})