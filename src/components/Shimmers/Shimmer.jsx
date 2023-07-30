const Shimmer = () => {
    return (
      
      <div className="flex flex-wrap justify-center">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div className="flex flex-col w-72 shadow-lg gap-1 m-4 pb-3">
            <div className="w-72 h-36 bg-gray-100 rounded-lg "></div>
            <div className="w-24 mx-2 my-1 h-4 bg-gray-100 rounded-lg"></div>
            <div className="w-24 mx-2 my-1 h-4 bg-gray-100 rounded-lg"></div>
           
          </div>
          ))}
      </div>
    );
  };

export default Shimmer