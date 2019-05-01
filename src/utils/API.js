import axios from "axios";


export default {
  getImage: function() {
    return axios.get("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=303af4bb30154423b25164bc0527310c&gallery_id=72157706860442171&extras=owner_name,url_l&format=json&nojsoncallback=1");
  }
};
