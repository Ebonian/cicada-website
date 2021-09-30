import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Chart from "../../../components/Chart";
import Navigation from "../../../components/Navigation";
import { gsap, Power3 } from "gsap";

// import enneagram chart
import one from "../../../images/enneagram-chart/SVG/1.svg";
import two from "../../../images/enneagram-chart/SVG/2.svg";
import three from "../../../images/enneagram-chart/SVG/3.svg";
import four from "../../../images/enneagram-chart/SVG/4.svg";
import five from "../../../images/enneagram-chart/SVG/5.svg";
import six from "../../../images/enneagram-chart/SVG/6.svg";
import seven from "../../../images/enneagram-chart/SVG/7.svg";
import eight from "../../../images/enneagram-chart/SVG/8.svg";
import nine from "../../../images/enneagram-chart/SVG/9.svg";
import mainLine from "../../../images/enneagram-chart/SVG/lines.svg";
import { Link } from "react-router-dom";

export default function SelectType() {
  let chartItem = useRef(null);

  useEffect(() => {
    gsap.from(chartItem, 2, {
      delay: 0.2,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col justfiy-center max-w-screen-2xl items-center text-center space-y-32">
          <div className="max-w-screen-sm space-y-10">
            <div
              className="relative w-600 h-600"
              ref={(el) => {
                chartItem = el;
              }}
            >
              <Link
                to={{ pathname: "/Problem/Type2", state: { pluem: "LOLOL" } }}
              >
                Go
              </Link>
              <Chart
                route="/Problem/Type1"
                styling="absolute w-20 h-20 right-24 top-16 cursor-pointer"
                src={one}
              />
              <Chart
                route="/"
                styling="absolute w-20 h-20 right-0 top-1/2 -mt-20 cursor-pointer"
                src={two}
              />
              <Chart
                route="/"
                styling="absolute w-20 h-20 bottom-32 right-8 cursor-pointer"
                src={three}
              />
              <Chart
                route="/"
                styling="absolute w-20 h-20 bottom-5 right-40 cursor-pointer"
                src={four}
              />
              <Chart
                route="/"
                styling="absolute w-20 h-20 bottom-5 left-40 cursor-pointer"
                src={five}
              />
              <Chart
                route="/"
                styling="absolute w-20 h-20 bottom-32 left-8 cursor-pointer"
                src={six}
              />
              <Chart
                route="/"
                styling="absolute w-20 h-20 left-0 top-1/2 -mt-20 cursor-pointer"
                src={seven}
              />
              <Chart
                route="/"
                styling="absolute w-20 h-20 left-24 top-16 cursor-pointer"
                src={eight}
              />
              <Chart
                route="/"
                styling="absolute left-1/2 -ml-10 w-20 h-20 cursor-pointer"
                src={nine}
              />

              <div className="p-8">
                <img src={mainLine} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
