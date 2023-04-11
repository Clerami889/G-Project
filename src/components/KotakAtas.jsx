import React from "react";

const KotakAtas = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#03001C] via-[#18122B] to-[#453C67] flex flex-row  rounded-xl m-12 h-[12rem] min-[400px]:h-[13rem]">
      <div className="basis-1/6 ">
        <section className="bg-[url('../public/gei5.jpg')] bg-cover bg-no-repeat bg-center h-[3rem] w-[3rem] relative rounded-[2rem] left-[1rem] top-[4rem] hover:scale-125 hover:-translate-y-2 hover:duration-[400ms] hover:delay-150 xl:w-16 xl:h-16 "></section>
      </div>

      <div className="">
        <section className="pt-[1.4rem] pr-[1rem] pl-[2rem] text-[#ffffff] text-[1rem] sm:text-[1.3rem] 2xl:text-[1rem] xl:text-[2rem]">
          Suatu hari saya memotong rambut saya model bob, lalu saya bosen
          melihat model rambut saya dan saya memotong kembali rambut saya
          menjadi lebih pendek dan saya menjadi emo
        </section>
      </div>
    </div>
  );
};

export default KotakAtas;