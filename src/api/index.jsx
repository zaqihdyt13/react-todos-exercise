//import axios
import axios from "axios";

const Api = axios.create({
  //set default endpoint API
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export default Api;
