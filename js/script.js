let celcius = document.getElementById("celcius");
let kelvin = document.getElementById("kelvin");
let fahrenheit = document.getElementById("fahrenheit");

celcius.addEventListener("keydown", function (e) {
  console.log(e);
    if (e.key === "Enter") {
  let celciusValue = +e.target.value;
  fahrenheit.value = (celciusValue * (5 / 9) + 32).toFixed(2);
  kelvin.value = (celciusValue + 273.15).toFixed(2);
    }
});

fahrenheit.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "Enter") {
  let fahrenheitValue = +e.target.value;
  celcius.value = (fahrenheitValue - 32 * (5 / 9)).toFixed(2);
  kelvin.value = (fahrenheitValue + 273.15).toFixed(2);
    }
});

kelvin.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "Enter") {
  let kelvinValue = +e.target.value;
  celcius.value = (kelvinValue - 273.15).toFixed(2);
  fahrenheit.Value = (kelvinValue + 273.15).toFixed(2);
    }
});

