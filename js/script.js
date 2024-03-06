let celcius = document.getElementById("celcius");
let kelvin = document.getElementById("kelvin");
let fahrenheit = document.getElementById("fahrenheit");

celcius.addEventListener("input", function (e) {
  console.log(e);
  //   console.log(typeof(celciusValue))
  //   if (e.key = "Enter") {
  let celciusValue = +e.target.value;
  fahrenheit.value = (celciusValue * (5 / 9) + 32).toFixed(2);
  kelvin.value = (celciusValue + 273.15).toFixed(2);
  //   }
});

fahrenheit.addEventListener("input", function (e) {
  let fahrenheitValue = +e.target.value;
  celcius.value = (fahrenheitValue - 32 * (5 / 9)).toFixed(2);
  kelvin.value = (fahrenheitValue + 273.15).toFixed(2);
});

kelvin.addEventListener("input", function (e) {
  let kelvinValue = +e.target.value;
  celcius.value = (kelvinValue - 273.15).toFixed(2);
  fahrenheit.Value = (kelvinValue + 273.15).toFixed(2);
});

// function temprature(temp){
//     for(let i=0; i<=temp.length; i++){
// if(temp<=80){

// }

//     }
// }
// let farenHeight = (celcius * 5) / 9 + 32;
// enter.addEventListener("enter", function () {
//   function temprature(temp) {
//     for (let i = 0; i <= temp.length; i++) {
//       if (temp <= 80) {
//         console.log(temp[i] * 100);
//         console.log(farenHeight);
//       } else if (temp <= 70) {
//         console.log(temp[i] * 10);
//       }
//     }
//   }
// });
