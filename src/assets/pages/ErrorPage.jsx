
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
         <h1>Oops!</h1>
         <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/" className="text-blue-700 underline">Go Back Home</Link>
    </div>
  );
};

export default ErrorPage;

