// Convert Celsius to Fahrenheit
function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    
    if (celsius === "") {
        document.getElementById("cresult").innerText = "Please enter a value.";
    } else {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("cresult").innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    }
}

// Convert Fahrenheit to Celsius
function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;

    if (fahrenheit === "") {
        document.getElementById("fresult").innerText = "Please enter a value.";
    } else {
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("fresult").innerText = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    }
}

//onclick Listeners
document.getElementById('convert').addEventListener('click', convertToFahrenheit);
document.getElementById('toCelsius').addEventListener('click', convertToCelsius);

// Key Listeners
document.getElementById('celsius').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertToFahrenheit();
    }
});

document.getElementById('fahrenheit').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertToCelsius();
    }
});
