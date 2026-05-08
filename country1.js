const countryDetails = document.createElement("div");

const countryName = new URLSearchParams(location.search).get("name");

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json())
.then((country) => {
    // console.log(country);
    countryDetails.innerHTML = `
      <img src="${country[0]?.flags.svg}" alt="">
        <h1> Name: ${country[0]?.name?.common}</h1>
        <h3>Population: ${country[0]?.population?.toLocaleString("en-IN")}</h3>
        <h3>Capital: ${country[0]?.capital?.join("")}</h3>
        <h3>Region: ${country[0]?.region}</h3>
        <h3> Border Countries :</h3> 
        <div href ="/"class='bordering-countries'>Loading</div>

     `;
    document.body.append(countryDetails);
    const borderElement = document.querySelector(".bordering-countries");
    const Availableborders = country[0]?.borders;

    if (!Availableborders || Availableborders.length == 0) {
      borderElement.textContent = "none";
      return;
    }

    fetch(
      `https://restcountries.com/v3.1/alpha?codes=${Availableborders.join(",")}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const borders = data.map((Bordercountry) => Bordercountry.name.common);

       borderElement.innerHTML= borders.map(
        (Bordercountry)=> `<a href=country.html?name=${Bordercountry}>${Bordercountry}</a>`
      )
        

        // borderElement.addEventListener("click", (e) => {
        //   if (e.target.tagName === "A") {
        //     e.preventDefault();

        //     console.log(e.target.textContent);

        //     const countryName = e.target.textContent.trim();

        //     location.href = `/country.html?name=${countryName}`;
        //   }
        // }); if u want to redirect to something else such as a modal
      });
  });
