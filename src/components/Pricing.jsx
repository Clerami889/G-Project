import React from "react";
import { VscCheck } from "react-icons/vsc";
const Pricing = () => {
  return (
    <div>
      <div className="Container flex items-center justify-center min-h-screen bg-slate-800 ">
        <div className="InnerContainer flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
          <div className="bg-slate-700 rounded-xl text-white">
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Rent</div>
              <div className="h2 mt-10 font-serif text-5xl text-center">
                Date
              </div>
              <div className="h3 mt-2 text-center">Rp.500.000/Day</div>
              <div className="flex justify-center">
                <a
                  href="https://www.danielspatzek.com/home/"
                  className="inline-block px-10 py-3 my-6 text-center border border-indigo-600 rounded-lg hover:bg-indigo-800 hover:border-indigo-800"
                >
                  Rent Now
                </a>
              </div>
            </div>

            <div className="border-t border-slate-700 "></div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-center items-center">
                  <VscCheck />
                  <span className="text-sm ml-1 ">25+ Service</span>
                </div>
                <div className="flex justify-center items-center">
                  <VscCheck />
                  <span className="text-sm ml-1 ">Trusted</span>
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
