function convertTemperature() {

const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);

  const conversionType = document.getElementById("conversionType").value;
  let convertedTemperature;
  let convertedTemperatureUnit;

  if (conversionType === "celsius_to_fahrenheit") {
    convertedTemperature = (temperatureInput * 9/5) + 32; // Celsius to Fahrenheit
    convertedTemperatureUnit = "°F";
  } else if (conversionType === "fahrenheit_to_celsius") {
    convertedTemperature = (temperatureInput - 32) * 5/9; // Fahrenheit to Celsius
    convertedTemperatureUnit = "°C";
  } else if (conversionType === "celsius_to_kelvin") {
    convertedTemperature = temperatureInput + 273.15; // Celsius to Kelvin
    convertedTemperatureUnit = "K";
  } else if (conversionType === "kelvin_to_celsius") {
    convertedTemperature = temperatureInput - 273.15; // Kelvin to Celsius
    convertedTemperatureUnit = "°C";
  } else if (conversionType === "fahrenheit_to_kelvin") {
    convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
    convertedTemperatureUnit = "K";
  } else if (conversionType === "kelvin_to_fahrenheit") {
    convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
    convertedTemperatureUnit = "°F";
  }

  document.getElementById("convertedTemperatureValue").textContent = convertedTemperature.toFixed(2);
  document.getElementById("convertedTemperatureUnit").textContent = convertedTemperatureUnit;
      }