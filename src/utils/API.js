import axios from "axios";


export default {
  getImage: function() {
    return axios.get("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key="+Key.env+"gallery_id=72157706860442171&extras=owner_name,url_l&format=json&nojsoncallback=1");
  }
};
