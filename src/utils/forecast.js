const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3c7fa65e9e2a1095f94b5c60839cace0&query=${latitude.toString()},${longitude.toString()}&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + response.body.current.temperature + 'degree out. there is a ' + response.body.current.feelslike + '% chance of rain')
        }
    })
}

module.exports = forecast