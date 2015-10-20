var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {

  "API_URL": "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/",

  "formatParams": function( params ){
    return "?" + Object
          .keys(params)
          .map(function(key){
            return key+"="+params[key]
          })
          .join("&")
  },

  "call_api": function(api_key, path, params){
    if(api_key === undefined || api_key == ""){
      console.log("No API key set.");
      return false;
    }

    if (params === undefined){
      params = {};
    }
    payload = params;
    payload.key = api_key;

    var xhttp = new XMLHttpRequest();

    url =  this.API_URL + path + this.formatParams(payload);
    // console.log(url);
    xhttp.open("GET", url, false);
    xhttp.send();

    if (xhttp.readyState == 4 && xhttp.status == 200) {
      call_response = JSON.parse(xhttp.responseText);
      return call_response;
    } else if (xhttp.status <= 599 && xhttp.status >= 400) {
      console.log("API request failed - Code " + xhttp.status);
      console.log(xhttp.responseText);
      return false;
    }
  }

};
