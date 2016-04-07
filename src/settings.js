module.exports = {

  "remap_keys": {
    "day":
        {"U":"U", "V":"V", "W":"W", "Dm":"T", "S":"S", "PPd":"Pp",
        "Hn":"H", "Gn":"G", "FDm":"F", "D":"D", "$":"$"},
    "night":
        {"V":"V", "W":"W", "Nm":"T", "S":"S", "PPn":"Pp",
        "Hm":"H", "Gm":"G", "FNm":"F", "D":"D", "$":"$"},
    "default":
        {"V":"V", "W":"W", "T":"T", "S":"S", "Pp":"Pp",
        "H":"H", "G":"G", "F":"F", "D":"D", "U":"U", "$":"$", "P":"P","Pt":"Pt", "Dp":"Dp"}
  },

  "human_keys": {
    "V":"visibility",
    "W":"weather",
    "T":"temperature",
    "S":"wind_speed",
    "Pp":"precipitation",
    "P": "pressure",
    "Pt": "pressure_tendency",
    "H":"humidity",
    "G":"wind_gust",
    "F":"feels_like_temperature",
    "D":"wind_direction",
    "Dp":"dew_point",
    "U":"uv",
    "$":"name"
  },

  "weather_codes": {
    "0":"Clear night",
    "1":"Sunny day",
    "2":"Partly cloudy (night)",
    "3":"Partly cloudy (day)",
    "4":"Not used",
    "5":"Mist",
    "6":"Fog",
    "7":"Cloudy",
    "8":"Overcast",
    "9":"Light rain shower (night)",
    "10":"Light rain shower (day)",
    "11":"Drizzle",
    "12":"Light rain",
    "13":"Heavy rain shower (night)",
    "14":"Heavy rain shower (day)",
    "15":"Heavy rain",
    "16":"Sleet shower (night)",
    "17":"Sleet shower (day)",
    "18":"Sleet",
    "19":"Hail shower (night)",
    "20":"Hail shower (day)",
    "21":"Hail",
    "22":"Light snow shower (night)",
    "23":"Light snow shower (day)",
    "24":"Light snow",
    "25":"Heavy snow shower (night)",
    "26":"Heavy snow shower (day)",
    "27":"Heavy snow",
    "28":"Thunder shower (night)",
    "29":"Thunder shower (day)",
    "30":"Thunder"
  }

};
