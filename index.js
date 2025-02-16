// Varaibales
const convertBtn = document.getElementById("btn");
let meterFeet = document.getElementById("meter-feet");
let literGallon = document.getElementById("liter-gallon");
let kilogramPound = document.getElementById("kilogram-pound");
convertBtn.addEventListener("click", function () {
  let inputVal = document.getElementById("one").value;
  inputVal = Number(inputVal);
  // Running Functions
  length(inputVal);
  volume(inputVal);
  mass(inputVal);
  document.getElementById("one").value = "";
});

function length(input) {
  let pass = "";
  let feet = input * 3.28084;
  let meter = input / 3.28084;
  pass = `${input} meters = ${feet.toFixed(
    3
  )} feet | ${input} feet = ${meter.toFixed(3)} meters`;
  meterFeet.innerHTML = pass;
}

function volume(input) {
  let pass = "";
  let gallon = input * 0.264172;
  let liter = input / 0.264172;
  pass = `${input} liters = ${gallon.toFixed(
    3
  )} gallons | ${input} gallons = ${liter.toFixed(3)} meters`;
  literGallon.innerHTML = pass;
}

function mass(input) {
  let pass = "";
  let pound = input * 2.20462;
  let kg = input / 2.20462;
  pass = `${input} kilos = ${pound.toFixed(
    3
  )} pounds | ${input} pounds = ${kg.toFixed(3)} kilos`;
  kilogramPound.innerHTML = pass;
}
