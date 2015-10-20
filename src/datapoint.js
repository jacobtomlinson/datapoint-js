var site = require("./site");
var forecast = require("./forecast");

var datapoint = {

  "api_key": "",

  "set_key": function(api_key){
    this.api_key = api_key;
  },

  "get_sites": function(){
    return site.get_sites(this.api_key);
  },

  "get_nearest_site": function(longitude, latitude){
    return site.get_nearest_site(this.api_key, longitude, latitude);
  },

  "get_forecast_for_site": function(site_id, frequency){
    return forecast.get_forecast_for_site(this.api_key, site_id, frequency);
  }
}

module.exports = datapoint;

if (typeof window !== 'undefined') {
  window.datapoint = datapoint;
}
