const Mountain = () => {
    return (
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://i.pinimg.com/474x/4d/90/ca/4d90caafeec8c8deef38e588fb369b18.jpg')` }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-center text-white px-4">
          <div>
            <h1 className="text-6xl font-bold mb-4 font-serif">Mountain</h1>
            <p className="text-xl max-w-xl mx-auto font-light leading-relaxed">
              A mountain is a large landform that rises prominently above its surroundings, typically exhibiting steep slopes, a defined summit, and considerable height. Mountains often serve as natural boundaries and offer breathtaking views.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Mountain;
  