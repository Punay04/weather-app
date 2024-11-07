const button = document.getElementById("searchButton");
const input = document.getElementById("city-input");

const cityName = document.getElementById("cityName");
const cityTime = document.getElementById("cityTime");
const cityTemp = document.getElementById("cityTemp");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=f5c134b06b504ffcb5b105356240711&q=${cityName}&aqi=yes`
  );
  return promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`;
  cityTime.innerText = `${result.location.localtime}`;
  cityTemp.innerText = `${result.current.temp_c}celsius`;
});

//
