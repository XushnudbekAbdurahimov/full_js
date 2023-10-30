const API_URL = "https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=$namangan&days=7&aqi=yes&alerts=yes"

async function FetchAPI(api) {
    const getData = await fetch(api)
    getData
        .json()
        .then((res) => CreateWeather(res))
        .catch((error) => console.log(error))
}

FetchAPI(API_URL)

function CreateWeather(data) {
    console.log(data);

    data.forecast.forecastday[1].hour.forEach((item) => {
        const div = document.createElement("div")
        const time = document.createElement("p")
        const b = document.createElement("b")

        div.innerHTML = data.location.country
        b.innerHTML = data.current.temp_c

        time.innerHTML = item.time.split(" ")[1]
        document.body.appendChild(time)
        document.body.appendChild(div)
        document.body.appendChild(b)
    })
}