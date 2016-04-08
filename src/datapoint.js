var site = require("./site");
var forecast = require("./forecast");
var obs = require("./obs");

/**
 * Datapoint module.
 * @module datapoint
 */
module.exports = {

  api_key: "",

  /**
   * Set your api key.
   * @param {string} api_key - Your api key.
   */
  set_key: function(api_key){
    this.api_key = api_key;
  },

  /**
   * Get a list of forecast sites.
   * @returns {Array} - List of site objects.
   */
  get_forecast_sites: function(){
    return site.get_sites(this.api_key, "fcs");
  },

  /**
   * Get a list of obs sites.
   * @returns {Array} - List of site objects.
   */
  get_obs_sites: function(){
    return site.get_sites(this.api_key, "obs");
  },

  /**
   * Get nearest forecast site.
   * @param {string} longitude - Logitude for location.
   * @param {string} latitude - Latitude for location.
   * @returns {Object}  - Site object.
   */
  get_nearest_forecast_site: function(longitude, latitude){
    return site.get_nearest_site(this.api_key, "fcs", longitude, latitude);
  },

  /**
   * Get nearest obs site.
   * @param {string} longitude - Logitude for location.
   * @param {string} latitude - Latitude for location.
   * @returns {Object}  - Site object.
   */
  get_nearest_obs_site: function(longitude, latitude){
    return site.get_nearest_site(this.api_key, "obs", longitude, latitude);
  },

  /**
   * Get forecast for site.
   * @param {string} site_id - ID of site to get forecast for.
   * @param {string} frequency - Data frequency (daily or 3hourly).
   * @returns {Object}  - Forecast object.
   */
  get_forecast_for_site: function(site_id, frequency){
    return forecast.get_forecast_for_site(this.api_key, site_id, frequency);
  },

  /**
   * Get observations for site.
   * @param {string} site_id - ID of site to get forecast for.
   * @returns {Object}  - Obserbations object.
   */
  get_obs_for_site: function(site_id){
    return obs.get_obs_for_site(this.api_key, site_id);
  }
}

if (typeof window !== 'undefined') {
  window.datapoint = module.exports;
}
