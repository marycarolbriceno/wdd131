const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();

currentyear.innerHTML = `&copy;${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;


const windSpeed = 9;
const temperature = 36;
const windChillElement = document.querySelector("#wind-chill");

const calculateWindChill = (temperature, windSpeed) => (35.74 + 0.6215 * temperature - 35.75 * (windSpeed**0.16) + 0.4275 * temperature * (windSpeed**0.16));

const windChill = calculateWindChill(temperature, windSpeed).toFixed(0);
if (temperature <= 50 && windSpeed >= 3) {
  windChillElement.innerHTML = `${windChill}°F`;
} else {
  console.log("N/A");
}
