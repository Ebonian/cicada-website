import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import { gsap, Power3 } from "gsap";
import { stereotype } from "../../Static";
import Skip from "../../components/Skip";

export default function Stereotype() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);
  let fourthItem = useRef(null);
  let fifthItem = useRef(null);
  let sixthItem = useRef(null);
  let seventhItem = useRef(null);
  let eighthItem = useRef(null);
  let ninethItem = useRef(null);
  let tenthItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 1, { delay: 1.4, opacity: 0 })
      .to(firstItem, 1, { delay: 3, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(secondItem, 1, { delay: 10, opacity: 0, display: "none" })
      .from(thirdItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(thirdItem, 1, { delay: 6, opacity: 0, display: "none" })
      .from(fourthItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(fourthItem, 1, { delay: 16, opacity: 0, display: "none" })
      .from(fifthItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(fifthItem, 1, { delay: 12, opacity: 0, display: "none" })
      .from(sixthItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(sixthItem, 1, { delay: 15, opacity: 0, display: "none" })
      .from(seventhItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(seventhItem, 1, { delay: 3, opacity: 0, display: "none" })
      .from(eighthItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(eighthItem, 1, { delay: 14, opacity: 0, display: "none" })
      .from(ninethItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(ninethItem, 1, { delay: 16, opacity: 0, display: "none" })
      .from(tenthItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(tenthItem, 1, { delay: 16, opacity: 0, display: "none" });
  }, []);

  const [page, setPage] = useState(0);

  const clickHandler = () => {
    setPage((prevState) => prevState + 1);
  };

  console.log(page);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" />
      <Skip route="/Exhibition/Enneagram" />
      <div
        className="flex justify-center items-center h-screen w-full"
        onClick={() => {
          clickHandler();
        }}
      >
        <div className="flex flex-col flex-grow h-screen justify-center items-center max-w-screen-sm text-center px-5 md:px-0">
          {/*  */}

          <div
            className="space-y-5"
            ref={(el) => {
              firstItem = el;
            }}
          >
            <h1 className="text-4xl font-semibold text-gray-900">
              {stereotype[0]}
            </h1>
          </div>

          <div
            className="space-y-5"
            ref={(el) => {
              secondItem = el;
            }}
          >
            <p className="text-xl font-medium text-gray-700">{stereotype[1]}</p>
          </div>

          <div
            className="space-y-5"
            ref={(el) => {
              thirdItem = el;
            }}
          >
            <p className="text-xl font-medium text-gray-700">{stereotype[2]}</p>
          </div>

          <div
            className="space-y-5"
            ref={(el) => {
              fourthItem = el;
            }}
          >
            <p className="text-xl font-medium text-gray-700">{stereotype[3]}</p>
          </div>

          <div
            className="space-y-5"
            ref={(el) => {
              fifthItem = el;
            }}
          >
            <p className="text-xl font-medium text-gray-700">{stereotype[4]}</p>
          </div>

          <div
            className="space-y-5"
            ref={(el) => {
              sixthItem = el;
            }}
          >
            <p className="text-xl font-medium text-gray-700">{stereotype[5]}</p>
          </div>

          <div
            className="space-y-5"
            ref={(el) => {
              seventhItem = el;
            }}
          >
            <h1 className="text-4xl font-semibold text-gray-900">
              {stereotype[6]}
            </h1>
          </div>

          <div
            className="space-y-5"
            ref={(el) => {
              eighthItem = el;
            }}
          >
            <p className="text-xl font-medium text-gray-700">{stereotype[7]}</p>
          </div>

          <div
            className="space-y-5"
            ref={(el) => {
              ninethItem = el;
            }}
          >
            <p className="text-xl font-medium text-gray-700">{stereotype[8]}</p>
          </div>

          <div
            className="space-y-5"
            ref={(el) => {
              tenthItem = el;
            }}
          >
            <p className="text-xl font-medium text-gray-700">{stereotype[9]}</p>
          </div>

          {/*  */}
        </div>
      </div>
    </motion.div>
  );
}
