import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 justify-center">
          <Link to="/sea">
            <div className="bg-white p-4 sm:p-6 shadow-md text-center rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <h2 className="text-md sm:text-lg md:text-xl font-semibold">Sea</h2>
            </div>
          </Link>
          <Link to="/desert">
            <div className="bg-white p-4 sm:p-6 shadow-md text-center rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <h2 className="text-md sm:text-lg md:text-xl font-semibold">Desert</h2>
            </div>
          </Link>
          <Link to="/forest">
            <div className="bg-white p-4 sm:p-6 shadow-md text-center rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <h2 className="text-md sm:text-lg md:text-xl font-semibold">Forest</h2>
            </div>
          </Link>
          <Link to="/mountain">
            <div className="bg-white p-4 sm:p-6 shadow-md text-center rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <h2 className="text-md sm:text-lg md:text-xl font-semibold">Mountain</h2>
            </div>
          </Link>
          <Link to="/river">
            <div className="bg-white p-4 sm:p-6 shadow-md text-center rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <h2 className="text-md sm:text-lg md:text-xl font-semibold">River</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
