import Cards from "./ Cards";
const Sea = () => {
    return (
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://i.pinimg.com/474x/46/ad/71/46ad71bfaba5bf78a53322fb391f1bdc.jpg')` }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-center text-white px-4">
          <div>
            <h1 className="text-6xl font-bold mb-4 font-serif">Sea</h1>
            <p className="text-xl max-w-xl mx-auto font-light leading-relaxed">
              The sea is a large body of saltwater that covers much of the Earth's surface. It is a vital part of our planet's ecosystem and plays a key role in regulating the climate and supporting marine life.
            </p>
          </div>
        
        </div>
      <Cards/>
      </div>
    );
  };
  
  export default Sea;
  