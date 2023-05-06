import React from "react";
import Pricing from "./Pricing";
import suara from "./Suara/S1.ogg";
const CardPricing = () => {
  const Data = [
    {
      judul: "BUY OG",
      judul2: "OG",
      harga: "Rp.5000/OG",
      tombol: "Buy Now",
      pro1: "25+ Service",
      pro2: "Kewl",
      pro3: "Trust Me Bro",
      link: "https://trakteer.id/Tohf__.03",
    },

    {
      judul: "Sewa Milk",
      judul2: "Susu",
      harga: "200 MYR/Day",
      tombol: "Rent Now",
      pro1: "Full Service",
      pro2: "Feet Pics Anytime",
      pro3: "Indian",
      link: "https://www.instagram.com/aidanhongwu/",
    },
    {
      judul: "Sehat",
      judul2: "Brokoli",
      harga: "Cukup Mahal",
      tombol: "Order Now",
      pro1: "Health +100",
      pro2: "Goblin Colour",
      pro3: "Santai Dulu Gak Sih",
      link: "https://mupi.carrd.co/",
    },
  ];
  return (
    <div className="Container flex flex-col gap-12 md:flex-row md:gap-24 items-center justify-center min-h-screen min-w-screen md:h-[100dvh] md:w-[100dvw] bg-slate-800">
      <Pricing
        judul={Data[0].judul}
        judul2={Data[0].judul2}
        harga={Data[0].harga}
        tombol={Data[0].tombol}
        pro1={Data[0].pro1}
        pro2={Data[0].pro2}
        pro3={Data[0].pro3}
        link={Data[0].link}
      />
      <Pricing
        judul={Data[1].judul}
        judul2={Data[1].judul2}
        harga={Data[1].harga}
        tombol={Data[1].tombol}
        pro1={Data[1].pro1}
        pro2={Data[1].pro2}
        pro3={Data[1].pro3}
        link={Data[1].link}
      />

      <Pricing
        judul={Data[2].judul}
        judul2={Data[2].judul2}
        harga={Data[2].harga}
        tombol={Data[2].tombol}
        pro1={Data[2].pro1}
        pro2={Data[2].pro2}
        pro3={Data[2].pro3}
        link={Data[2].link}
      />
    </div>
  );
};

export default CardPricing;
