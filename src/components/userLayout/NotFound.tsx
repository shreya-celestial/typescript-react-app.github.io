import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404 Error!</h1>
      <h2>
        Sorry but the page you are looking for is not found at this moment...
        Please try again!
      </h2>
      <p>
        Go back to <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
