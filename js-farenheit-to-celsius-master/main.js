// Fahrenheit to Celsius Convertor

// Event Listener
document.getElementById("convertor").addEventListener("click", convert);

// Global Variables
let fahrenheit;
let celsius;

// Event Functions
function convert() {
  // Input
  fahrenheit = Number(document.getElementById("num1").value);

  // Process
  celsius = (Number(fahrenheit - 32) * 5) / 9;
  celsius = Math.round(celsius * 100) / 100;
  
  // Output
  document.getElementById("newTemp").innerHTML = celsius;
}
