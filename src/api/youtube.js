import axios from "axios";

const KEY = "AIzaSyDpeCTtRi-olHGfsWiFSDAPrpo6oBznf9s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
