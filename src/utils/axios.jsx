import axios from "axios";

const instance = axios.create({
    baseURL : "https://picsum.photos/v2/list?page=1&limit=20"
})

export default instance;