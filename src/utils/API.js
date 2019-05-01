import axios from "axios";
require('dotenv').config()


export default {
  getImage: function() {
    return axios.get("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key="+process.env.REACT_APP_KEY+"&gallery_id=72157706860442171&extras=description,license,owner_name,tags,geo,media,path_alias,url_l&format=json&nojsoncallback=1");
  },
  getWeather: function(lat, long) {
    return axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID="+process.env.REACT_APP_WEATHER)
  },
  getForecast: function(lat, long) {
    return axios.get("https://api.openweathermap.org/data/2.5/forecast/hourly?lat="+lat+"&lon="+long+"&APPID="+process.env.REACT_APP_WEATHER)
  }
};
