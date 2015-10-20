var api = require("./api");
var settings = require("./settings");

module.exports = {

  "params": undefined,
  "frequency": undefined,

  "get_forecast_for_site": function(api_key, site_id, frequency){
    if(frequency === undefined){
      this.frequency = "daily";
    } else {
      this.frequency = frequency;
    }
    var data = api.call_api(api_key, site_id, {"res":this.frequency});
    this.params = data.SiteRep.Wx.Param;
    var forecast = {};
    forecast.data_date  = data.SiteRep.DV.dataDate; // Needs converting to date object
    forecast.continent  = data.SiteRep.DV.Location.continent;
    forecast.country    = data.SiteRep.DV.Location.country;
    forecast.name       = data.SiteRep.DV.Location.name;
    forecast.longitude  = data.SiteRep.DV.Location.lon;
    forecast.latitude   = data.SiteRep.DV.Location.lat;
    forecast.id         = data.SiteRep.DV.Location.i;
    forecast.elevation  = data.SiteRep.DV.Location.elevation;
    forecast.days       = this.clean_days(data.SiteRep.DV.Location.Period);

    return forecast;

  },

  "clean_days": function(raw_data){
    var days = [];

    for (var i = 0; i < raw_data.length; i++){
      day = {};
      day.timesteps = this.clean_timesteps(raw_data[i].Rep);
      days.push(day);
    }
    return days;
  },

  "clean_timesteps": function(raw_data){
    var timesteps = [];
    for (var i = 0; i < raw_data.length; i++){
      timestep = {};
      for (var key in raw_data[i]){
        new_key = this.parse_timestep_key(
                          this.remap_timestep_key(key, raw_data[i].$));
        timestep[new_key] = {};
        timestep[new_key].id = key;
        timestep[new_key].value = raw_data[i][key];
        timestep[new_key].units = this.get_units_for_key(key);
      }
      timesteps.push(timestep);
    }
    return timesteps;
  },

  "parse_timestep_key": function(key){
    // Return human readable key
    if (key in settings.human_keys){
      return settings.human_keys[key];
    } else {
      console.log("Unknown key " + key);
      return undefined;
    }
  },

  "remap_timestep_key": function(key, timestep){
    // Remap odd keys to common key
    // e.g Humidity Noon (Hn) and Humidity Midnight (Hm) to Humidity (H)
    if (key in settings.remap_keys.day ||
        key in settings.remap_keys.night ||
        key in settings.remap_keys.default ){
      if (timestep == "Day"){
        return settings.remap_keys.day[key];
      } else if (timestep == "Night"){
        return settings.remap_keys.night[key];
      } else {
        return settings.remap_keys.defaut[key];
      }
    } else {
      console.log("Unknown key " + key);
      return undefined;
    }
  },

  "get_units_for_key": function(key){
    var units = undefined;
    for (var i = 0; i < this.params.length; i++){
      if(key == this.params[i].name){
        units = this.params[i].units;
      }
    }
    return units;
  }
};
