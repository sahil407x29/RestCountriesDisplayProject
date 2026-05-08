const cardContainer = document.querySelector(".countries-container");

fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region",
)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((country) => {
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `/country.html?name=${country?.name?.common}`
      countryCard.innerHTML = `
  <img src="${country.flags?.svg}" alt="">
          <div class="card-text">
            <h3 class="card-title">${country?.name.common}</h3>
          <p><b>Population : ${country?.population.toLocaleString("en-IN")}</p>
          <p><b>Region :</b> ${country?.region}</p>
          <p><b>Capital :</b> ${country?.capital?.join(", ")}</p>
          `;
      cardContainer.appendChild(countryCard);
      // console.log(country);
    }),
  );
