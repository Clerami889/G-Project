import React from "react";
import Pricing from "./Pricing";
import { FaFrog } from "react-icons/fa";
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
      judul2: "SUSU",
      harga: "200 MYR/Day",
      tombol: "Rent Now",
      pro1: "Full Service",
      pro2: "Feet Pics Anytime",
      pro3: "Indian",
      link: "https://www.instagram.com/aidanhongwu/",
    },
  ];
  return (
    <div>
      <div className='className="Container flex md:flex-row md:gap-24 items-center justify-center min-h-screen bg-slate-800 '>
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
      </div>
    </div>
  );
};

export default CardPricing;
