import axios from "axios";

// export function retrieveHelloWorldBean() {
//   return axios.get("http://localhost:8080/hello-world-bean", {
//     // headers: {
//     //   'Origin': 'http://localhost:3000'
//     // }
//   });
// }

const apiClient = axios.create(
    {
        baseURL: "http://localhost:8080",
        // headers: {
        // 'Access-Control-Allow-Origin': 'http://localhost:3000'
        // }
    }
);

export const retrieveHelloWorldBean = () => apiClient.get(
  "/hello-world-bean",
  {
    // headers: {
    //   'Origin': 'http://localhost:3000'
    // }
  }
);

export const retrieveHelloWorldPathVariable = (username) => apiClient.get(
    `/hello-world/path-variable/${username}`,
    {
      // headers: {
      //   'Origin': 'http://localhost:3000'
      // }
    }
);

