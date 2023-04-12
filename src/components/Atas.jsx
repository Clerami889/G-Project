import React from "react";

const Atas = () => {
  return (
    <div className="bg-[url('../public/gei.jpeg')] bg-fixed bg-no-repeat md:h-[150vmin] md:justify-start flex flex-col m-3 rounded-xl scroll-smooth  h-[90vmax] text-center">
      <div className="mt-[13rem] text-center justify-center items-center ">
        <p
          id="hey"
          className="text-[5rem] transition ease-in-out delay-150 text-[#DF7857] text-center  hover:-translate-y-1 hover:scale-110 hover:duration-300"
        >
          Hey
        </p>
      </div>
      <p className="text-[5rem] text-[#A84448] text-center blur-[0.5px] animate-masuk">
        Im Giselle
      </p>
    </div>
  );
};

export default Atas;
