const tempContainer1 = document.querySelector(".tempContainer1");
const imgBx = document.querySelector(".imgBx");
const weatherDescription = document.querySelector(".weatherDescription");
const inputText = document.querySelector(".inputText");
const searchButton = document.querySelector("button");
const NameOfCity = document.querySelector(".cityName")


async function ipLookUp() {

    let url = "http://api.ipstack.com/check?access_key=0dd3a8b76be3ea183d109759e6842728";
    let obj = await (await fetch(url)).json();

    var cityName = obj.city;


    searchButton.addEventListener("click", function() {
        let newCity = inputText.value;
        cityName = `${newCity}`
        load();

    })

    document.addEventListener("keydown", function() {
        if (event.keyCode === 13) {
        cityName = `${innerText.value}`
        load();}

    })



    async function load() {

        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=772a1e4803671ffb153069f40c36f70f";
        let obj = await (await fetch(url)).json();

        let countryFlag = "http://www.geognos.com/api/en/countries/flag/" + obj.sys.country + ".png";
        console.log(countryFlag)

        weatherIcon = obj.weather[0].icon;

        tempContainer1.innerHTML = Math.floor(obj.main.temp) + "°";
        imgBx.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png">`

        weatherDescription.innerHTML = `<p>Description: ${obj.weather[0].description}</p> <p>Humidy: ${obj.main.humidity}%</p>  <p>Wind Speed: ${obj.wind.speed}m/s</p>`;
        NameOfCity.innerHTML = `${cityName} <img src="${countryFlag}">`;

    }


    load();

}

ipLookUp();
