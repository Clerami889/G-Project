import React from "react";
import { VscCheck } from "react-icons/vsc";
import { FaFrog } from "react-icons/fa";
const Pricing = (props) => {
  return (
    <div>
      <div className="Container flex items-center justify-center min-h-screen bg-slate-800 ">
        <div className="InnerContainer flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-">
          <div className="bg-slate-700 rounded-xl text-white hover:bg-indigo-700 duration-300 ease-out">
            <div className="p-8 mx-3 mt-2 rounded-t-xl bg-slate-800 ">
              <div className="text-center uppercase select-none">Buy OG</div>

              <div className="h2 mt-7 font-serif text-5xl text-center select-none">
                <div className="">
                  <FaFrog className="inline h-12 items-center justify-center" />
                </div>
                OG
              </div>
              <div className="h3 mt- text-center select-none">Rp.5000/OG</div>
              <div className="flex justify-center">
                <a
                  draggable="false"
                  href="https://trakteer.id/Tohf__.03"
                  className="inline-block px-10 py-3 my-6 text-center border border-indigo-600 rounded-lg hover:bg-indigo-800 hover:border-indigo-800 duration-150 ease-in-out"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="border-t border-slate-700 "></div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800 ">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-center items-center">
                  <VscCheck />
                  <span className="text-sm ml-1 ">25+ Service</span>
                </div>
                <div className="flex justify-center items-center">
                  <VscCheck />
                  <span className="text-sm ml-1 ">Kewl</span>
                </div>
                <div className="flex justify-center items-center">
                  <VscCheck />
                  <span className="text-sm ml-1 ">Trust Me Bro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
