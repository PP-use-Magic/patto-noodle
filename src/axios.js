import axios from "axios";

const instance = axios.create({
    baseUrl:"http://localhost:8080/patto_backend_war_exploded/"
    ,withCredentials: true
});
export default instance;