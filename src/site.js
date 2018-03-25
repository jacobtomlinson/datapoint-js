var api = require("./api");
var settings = require("./settings");

module.exports = {

    "get_sites": function(api_key, type){
      sites = api.call_api(api_key, type, "sitelist/");
      return sites.Locations.Location;
    },

    "get_regional_sites": function(api_key, type){
      sites = api.call_api(api_key, type, "sitelist/");
      sites = sites.Locations.Location

      // Return readable site names
      for (var i = 0; i < sites.length; i++) {
        var site_id = sites[i]['@name'];
        if (site_id in settings.region_ids){
          sites[i]['@name'] = settings.region_ids[site_id];
        }
      }

      return sites;
    },

    "distance_between_coords": function(lon1, lat1, lon2, lat2){
      var distance = Math.abs(lon1-lon2) + Math.abs(lat1-lat2);
      return distance;
    },

    "get_nearest_site": function(api_key, type, longitude, latitude){
      if(latitude === undefined || longitude === undefined){
        console.log("Latitude or Longitude not set.");
        return false;
      }

      var nearest = false;
      var distance = false;
      var sites = this.get_sites(api_key, type);

      for(var i = 0; i < sites.length; i++){
        var new_distance = this.distance_between_coords(
                            parseFloat(sites[i].longitude),
                            parseFloat(sites[i].latitude),
                            parseFloat(longitude),
                            parseFloat(latitude));

        if (distance == false || new_distance < distance){
          distance = new_distance;
          nearest = sites[i];
        }
      }

      return nearest;

    }

};
