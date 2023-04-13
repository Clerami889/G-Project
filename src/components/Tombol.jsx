import React from "react";

const Tombol = () => {
  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const testo = () => {
    window.scrollTo({ top: 1525, behavior: "smooth" });
  };
  return (
    <div className="h-[100vh] w-[100svw] bg-purple-200 grid grid-cols-1 place-items-center">
      <button
        onClick={top}
        className="h-24 w-36 bg-purple-600/90 rounded-xl text-zinc-100 md:h-36 md:w-48 hover:transform hover:scale-125 hover:duration-500"
      >
        Back to top
      </button>

      <button
        onClick={testo}
        className="h-24 w-36 text-zinc-100 bg-purple-900 rounded-2xl"
      >
        Milk Gay
      </button>
    </div>
  );
};

export default Tombol;
