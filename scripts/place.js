
let tempeture = 41; //degrees F
let windSpeed = 4;  //speed MPH

function calculateWindChill(tempeture, windSpeed){
    return 35.74 + 0.6215* tempeture - 35.75 * (windSpeed ** 0.16) + 0.4275 * tempeture * (windSpeed ** 0.16)
}

document.getElementById("deg").textContent = tempeture + "°F";
document.getElementById("wind-speed").textContent = windSpeed + "mph";

if (tempeture <= 50 && windSpeed > 3){
    document.getElementById("wind-chill").textContent = Math.round(calculateWindChill(tempeture, windSpeed)) + "°F";
}

else{
     document.getElementById("wind-chill").textContent = "N/A"
}