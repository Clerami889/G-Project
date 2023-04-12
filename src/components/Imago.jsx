import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import React from "react";
import a from "./Gambar/a1.jpeg";
import b from "./Gambar/a2.jpeg";
import c from "./Gambar/a3.jpeg";
import d from "./Gambar/a4.jpeg";
import e from "./Gambar/a5.jpeg";
import f from "./Gambar/a6.jpeg";
import g from "./Gambar/a7.jpeg";
import h from "./Gambar/a8.jpeg";
import i from "./Gambar/a9.jpeg";
import j from "./Gambar/a10.jpeg";
import k from "./Gambar/a11.jpeg";
import l from "./Gambar/a12.jpeg";
import m from "./Gambar/a13.jpeg";
import n from "./Gambar/a14.jpeg";

const Imago = () => {
  const [width, setWidth] = useState(0);
  const au = useRef();
  useEffect(() => {
    console.log(au.current.scrollWidth, au.current.offsetWidth);
    setWidth(au.current.scrollWidth - au.current.offsetWidth);
  }, []);

  const images = [a, b, c, d, e, f, g, h, i, j, k, l, m, n];

  return (
    <div className="mx-12 my-12 bg-purple-400/50 ">
      <motion.div ref={au} className="carousel cursor-grab overflow-hidden ">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex "
        >
          {images.map((image) => {
            return (
              <motion.div
                className="min-h-[30vmax] min-w-[40vmax] p-[40px] duration-300 md:min-h-[20vmax] md:min-w-[30vmax]"
                key={image}
              >
                <img
                  src={image}
                  alt=""
                  className="w-[100%] h-[100%] rounded-[2rem] cursor-pointer"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Imago;
