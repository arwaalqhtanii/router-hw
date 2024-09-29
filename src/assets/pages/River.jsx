import Cards from "./ Cards";
const River = () => {
    return (
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://i.pinimg.com/474x/bf/6f/fa/bf6ffa7aa9ffdd476a994d579911a1d6.jpg')` }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-center text-white px-4">
          <div>
            <h1 className="text-6xl font-bold mb-4 font-serif">River</h1>
            <p className="text-xl max-w-xl mx-auto font-light leading-relaxed">
              A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake, or another river. Rivers are essential for life and serve as important natural resources.
            </p>
          </div>
        </div>
        <Cards/>
      </div>
    );
  };
  
  export default River;
  
