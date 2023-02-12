/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let lEl=document.getElementById("length_el");
let vEl=document.getElementById("volume_el");
let mEl=document.getElementById("mass_el");


function convert() {
  let input =Number(document.getElementById("input-el").value);
console.log(typeof(input));
  console.log("clicked");
  let feet=input*3.281;
  let meter=input/3.281;
  let gallons=input*0.264;
  let liters=input/0.264;
  let pounds=input*2.204;
  let kilogram=input/2.204;
  lEl.textContent=`${input.toFixed(2)} meters=${feet.toFixed(2)} feets | ${input.toFixed(2)} feets = ${meter.toFixed(2)} meters`;
  vEl.textContent=`${input.toFixed(2)} Liters=${gallons.toFixed(2)} Gallons | ${input.toFixed(2)} Gallons = ${liters.toFixed(2)} liters`;
  mEl.textContent=`${input.toFixed(2)} Kilogram=${pounds.toFixed(2)} Pounds | ${input.toFixed(2)} Pounds = ${kilogram.toFixed(2)} Kilograms`;
}

