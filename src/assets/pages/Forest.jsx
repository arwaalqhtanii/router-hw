import Cards from "./ Cards";

const Forest = () => {
    return (
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://i.pinimg.com/474x/bf/8b/68/bf8b68084e833c28b5585b9cf83ddec2.jpg')` }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-center text-white px-4">
          <div>
            <h1 className="text-6xl font-bold mb-4 font-serif">Forest</h1>
            <p className="text-xl max-w-xl mx-auto font-light leading-relaxed">
              A forest is a large area dominated by trees. 
            </p>
          </div>
        </div>
        <Cards/>
      </div>
    );
  };
  
  export default Forest;
  