import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";

const WelcomeComponent = () => {
    const { username } = useParams();

    const [message, setMessage] = useState(null);

    const callHelloWorldRestApi = () => {
      console.log("Called");
      //axios

      retrieveHelloWorldPathVariable("Park")
        .then( (response) => successfulResponse(response) )
        .catch( (response) => errorResponse(response) )
        .finally( () => console.log("clean up") );
    };


    const successfulResponse = (response) => {
      console.log(response);
      setMessage(response.data.message);
    };

    const errorResponse = (response) => {
      console.log(response);
    };
  
    return (
      <div className="Welcome">
        <h1>Welcome my todoapp, {username}</h1>
        <div>
          Your todos - <Link to="/todos">Go here</Link>
        </div>
        <div>
          <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
            Call Hello World
          </button>
        </div>
        <div className="text-info">{message}</div>
      </div>
    );
  };

export default WelcomeComponent;