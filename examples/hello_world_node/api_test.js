var datapoint = require('../src/datapoint')
// or if you run `npm install datapoint-js`
// var datapoint = require('datapoint-js')

datapoint.set_key("aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee")

site = datapoint.get_nearest_site(-0.124626, 51.500728)

forecast = datapoint.get_forecast_for_site(site.id)

current_timestep = forecast.days[0].timesteps[0]

console.log("Temperature is " + current_timestep.temperature.value + "°" + current_timestep.temperature.units + " in " + site.name)
