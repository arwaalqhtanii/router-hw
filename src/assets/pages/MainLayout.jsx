import { Link } from 'react-router-dom';


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">

      <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url('https://i.pinimg.com/474x/89/03/3f/89033fb0a2c6d69d64e67e7d0325c4c0.jpg')` }}>
        <div className="h-full flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4">Explore Nature</h1>
          <p className="text-md sm:text-lg md:text-xl max-w-lg font-light leading-relaxed mb-8">
            Discover the beauty of nature across various landscapes, from the vast seas to serene deserts and lush forests. Each place offers unique experiences and breathtaking views, waiting to be explored.
          </p>
        </div>


        <div className="absolute bottom-0 left-0 right-0 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 justify-center">
              <Link to="/sea">
                <div className="bg-white p-4 sm:p-6 shadow-md text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                  <h2 className="text-md sm:text-lg md:text-xl font-serif">Sea</h2>
                </div>
              </Link>
              <Link to="/desert">
                <div className="bg-white p-4 sm:p-6 shadow-md text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                  <h2 className="text-md sm:text-lg md:text-xl font-serif">Desert</h2>
                </div>
              </Link>
              <Link to="/forest">
                <div className="bg-white p-4 sm:p-6 shadow-md text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                  <h2 className="text-md sm:text-lg md:text-xl font-serif">Forest</h2>
                </div>
              </Link>
              <Link to="/mountain">
                <div className="bg-white p-4 sm:p-6 shadow-md text-center  transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                  <h2 className="text-md sm:text-lg md:text-xl font-serif">Mountain</h2>
                </div>
              </Link>
              <Link to="/river">
                <div className="bg-white p-4 sm:p-6 shadow-md text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                  <h2 className="text-md sm:text-lg md:text-xl font-serif">River</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default MainLayout;
