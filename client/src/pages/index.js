import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { gsap, Power3 } from "gsap";
import { motion } from "framer-motion";
import CicadaLogo from "../images/cicada.png";

export default function Home() {
  const pluem = "🐄";

  let imageItem = useRef(null);
  let titleItem = useRef(null);
  let subtitleItem = useRef(null);
  let linkItem = useRef(null);

  useEffect(() => {
    gsap.to(imageItem, 2, {
      delay: 1,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(titleItem, 2, {
      delay: 1.2,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitleItem, 2, {
      delay: 1.4,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(linkItem, 2, {
      delay: 1.6,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);

  const exitAnim = () => {
    gsap.to(imageItem, 2, {
      delay: 0.2,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(titleItem, 2, {
      delay: 0.2,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitleItem, 2, {
      delay: 0.1,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(linkItem, 2, {
      delay: 0,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col space-y-8 items-center text-center">
          <img
            src={CicadaLogo}
            alt="Cicada Logo"
            className="w-32 h-232 md:w-44 md:h-44 opacity-0"
            ref={(el) => {
              imageItem = el;
            }}
          />
          <h1
            className="text-5xl font-semibold text-gray-800 opacity-0"
            ref={(el) => {
              titleItem = el;
            }}
          >
            อะโล่ฮ่าาาา
          </h1>
          <h6
            className="text-3xl font-medium text-gray-700 opacity-0"
            ref={(el) => {
              subtitleItem = el;
            }}
          >
            อะล่าาาาโฮ่โอ่ฮีโย่อะจ้าากก
          </h6>
          <div
            className="flex duration-300 items-center text-xl space-x-2 text-gray-800 hover:text-gray-500 opacity-0"
            ref={(el) => {
              linkItem = el;
            }}
          >
            <Link
              to={{
                pathname: "/Exhibition",
                state: pluem,
              }}
              className=""
              onClick={() => {
                exitAnim();
              }}
            >
              มดนอนตะแคงเรียกมดตาย
            </Link>
            <FiArrowRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
