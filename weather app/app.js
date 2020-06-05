window.addEventListener('load', () => {
    ct = 0;
    let long;
    let lat;
    let degreesection = document.querySelector(".degree -section");
    // let degreespan = document.querySelector(".degree-section span");
    let temperatureDescription = document.querySelector(".temperature-description");
    let im = document.getElementById("me");
    let ic = document.querySelector(".icon");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c68b3134268e3e4dd99d896a2dc97617`
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    var temp = data.main.temp;
                    const desc = data.weather[0].description;
                    const tz = data.name;

                    temp = Math.floor(temp - 273.12);
                    temperatureDegree.textContent = temp;

                    temperatureDescription.textContent = desc;
                    locationTimezone.textContent = tz;

                    let fr = Math.floor((temp) * 9 / 5 + 32);
                    ic.innerHTML = `<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png' alt='Icon depicting current weather.'>`;

                    temperatureDegree.addEventListener("click", () => {
                        if (ct % 2 == 0) {
                            temperatureDegree.textContent = fr;
                            ct++;
                        }
                        else {
                            temperatureDegree.textContent = temp;
                            ct++;
                        }

                    });

                })
        });

    }
    else {
        h1.textContent = "Hey allow access to your location!"
    }

});