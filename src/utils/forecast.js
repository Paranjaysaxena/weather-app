const request = require("request")

const forecast = (latitude, longitude, callback)=> {
    const url = "http://api.weatherstack.com/current?access_key=23c1e287296c6b7ebbce83d7d9c4c590&query=" + latitude + "," + longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error) {
            callback("Unable to find location. Try another search. ", undefined)
        } else {
            callback(undefined, body.current.temperature + " --- " + body.current.feelslike)
        }
    })

}

module.exports = forecast