import React from "react";
import pic from "./Gambar/a15.jpg";

const Email = () => {
  return (
    <form id="gay" action="https://youtu.be/PBUG4DZ_a9A">
      <div className="flex items-center justify-center h-screen md:w-[100dvw] md:h-[100dvh] bg-zinc-700">
        <div className="bg-zinc-800 p-2 mx-2 rounded-2xl">
          <div className="flex flex-col md:flex-row rounded-l-xl">
            <img
              src={pic}
              alt=""
              className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            />

            <div className="p-6 md:p-12">
              <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
                Salam Kenal
              </h2>
              <p className="max-w-xs my-4 text-xs-leading-5 tracking-wide text-center text-white md:text-left">
                Aku Raja Iblis
              </p>
              <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                />

                <button
                  type="submit"
                  value="submit"
                  className="px-5 py-3 text-xs rounded-md text-zinc-900 bg-orange-500 hover:bg-orange-700 hover:text-white"
                >
                  Sampaikan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Email;
