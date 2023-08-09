const theSelect = document.getElementById("theSelect");
const countryCard = document.getElementById('countryCard');
const allCountriesDiv = document.getElementById("allCountriesDiv")

theSelect.addEventListener("change", ()=>{
    makeCard(theSelect.value)
})

        async function getAllCountriesNames() {
            try {
                let names = await fetch("https://restcountries.com/v2/all?fields=name");
                let data = await names.json();
                return data;
            } catch (error) {
                console.error("Error fetching country names:", error);
                return [];
            }
        }

        async function makeSelectOptions() {
            let countries = await getAllCountriesNames();
            let html = ``;
            for (let i = 0; i < countries.length; i++) {
                html += `<option value="${countries[i].name}">${countries[i].name}</option>`;
            }
            theSelect.innerHTML = html;
        }

        makeSelectOptions();
        makeCard('Afghanistan');



        async function makeCard(countryToShow){
            let country = await fetch(`https://restcountries.com/v3.1/name/${countryToShow}?fullText=true`)
            let data = await country.json();
         
            countryCard.innerHTML =
            `
            <img src="${data[0].flags.png}" class="card-img-top" alt="${data[0].flags.alt}">
            <div class="card-body ">
            <p class="card-text">Capital: ${data[[0]].capital}.</p>
            <p class="card-text">Population: ${data[0].population}.</p>
            <p class="card-text">Time zone : ${data[0].timezones[0]}.</p>
            </div>
            `;
           
        }
     
        