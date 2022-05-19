import axios from "axios";
export const services = {
  getMyData: () => {
    let result = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("Datavaild", res.data);
        return res.data;
      })
      .catch((error) => {
        // console.error(error, 'error')
        return error.data;
      });
    return result;
  },
};
