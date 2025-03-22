const temperature = 6;
const windSpeed = 29;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

function displayWindChill() {
    const windChillElement = document.querySelector(".weather-container .value:last-child");

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

window.addEventListener("load", displayWindChill);