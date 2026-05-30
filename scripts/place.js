document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`
const temperature = 10; // °C
const windSpeed = 8; // km/h

function calculateWindChill(temp, speed) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16)));
}
window.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.getElementById("windchill");
    let result = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        result = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
    }
    windChillElement.textContent = result;
});