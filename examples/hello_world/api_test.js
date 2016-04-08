var datapoint = require('../../src/datapoint')
// or if you run `npm install datapoint-js`
// var datapoint = require('datapoint-js')

// Create a new datapoint object with your API key
datapoint.set_key("aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee")

// Set out current location
var lat = 51.500728
var lon = -0.124626

// Before we get any data we need to find out our nearest observation and forecast sites
var obs_site = datapoint.get_nearest_obs_site(lon, lat)
var forecast_site = datapoint.get_nearest_obs_site(lon, lat)

// First we shall get the current observations and print them out
var obs = datapoint.get_obs_for_site(obs_site.id)
var obs_for_today = obs.days[obs.days.length-1]
var current_obs = obs_for_today.timesteps[obs_for_today.timesteps.length-1]

console.log("It is currently " + current_obs.weather.text.toLowerCase() + " with a temperature of " + current_obs.temperature.value + "°" + current_obs.temperature.units + " in " + forecast_site.name)

// Next let's get the forecast and print out the weather in an hour
var forecast = datapoint.get_forecast_for_site(forecast_site.id, '3hourly')
var forecast_for_today = forecast.days[0]
var next_forecast = forecast_for_today.timesteps[1]

console.log("At " + next_forecast.date + " it will be " + next_forecast.weather.text + " with a temperature of " + next_forecast.temperature.value + "°" + next_forecast.temperature.units + " in " + obs_site.name)
