import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:8080/patto_backend_war_exploded/"
    ,withCredentials: true
});
export default instance;