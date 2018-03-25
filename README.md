# _DataPoint for JavaScript_ [![Build Status](https://travis-ci.org/jacobtomlinson/datapoint-js.svg?branch=master)](https://travis-ci.org/jacobtomlinson/datapoint-js)

_A JavaScript library for accessing weather data via the [Met Office](http://www.metoffice.gov.uk/)'s open data API
known as [DataPoint](http://www.metoffice.gov.uk/datapoint)._

__Disclaimer: This module is in no way part of the DataPoint project/service.
This module is intended to simplify the use of DataPoint for JavaScript projects.
No support for this module is provided by the Met Office and may break as the DataPoint service grows/evolves.
The author will make reasonable efforts to keep it up to date and fully featured.__

## Features
* List forecast/observation sites
* Get nearest forecast/observation site from longitude and latitiude
* Get the following 5 day forecast types for any site
 * Daily (Two timesteps, midday and midnight UTC)
 * 3 hourly (Eight timesteps, every 3 hours starting at midnight UTC)
* Get hourly observations for the last 48 hours
* Get regional forecasts for the next 30 days (Grouped in four timesteps)

## Installation

### NodeJS

```Shell
npm install datapoint-js
```

### Manual

Download the contents `/src` (for node) and include them in your project.

## Example Usage

### Node

```JavaScript
var datapoint = require('datapoint-js')

datapoint.set_key("aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee")

site = datapoint.get_nearest_forecast_site(-0.124626, 51.500728)

forecast = datapoint.get_forecast_for_site(site.id, "3hourly")

current_timestep = forecast.days[0].timesteps[0]

console.log("Temperature is " + current_timestep.temperature.value + "°" + current_timestep.temperature.units + " in " + site.name)
```

#### Output
```
Temperature is 15°C in London
```

## Contributing changes

Please feel free to submit issues and pull requests.

To work on the project simply clone the project and run `npm install`.

This project uses gulp as its task runner and can be used to browserify the code and generate the documentation.

## Documentation
Documentation can be automatically generated using [JSDoc](http://usejsdoc.org/) by running `gulp document`.

## License

GPL v3
