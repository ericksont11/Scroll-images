import axios from "axios";
require('dotenv').config()


export default {
  getImage: function() {
    console.log(process.env.REACT_APP_KEY)
    return axios.get("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key="+process.env.REACT_APP_KEY+"&gallery_id=72157706860442171&extras=owner_name,url_l&format=json&nojsoncallback=1");
  }
};
