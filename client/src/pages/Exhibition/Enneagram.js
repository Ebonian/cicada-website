import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
// import { types } from "../../Static";
import { gsap, Power3 } from "gsap";

// import enneagram chart
import one from "../../images/enneagram-chart/SVG/1.svg";
import two from "../../images/enneagram-chart/SVG/2.svg";
import three from "../../images/enneagram-chart/SVG/3.svg";
import four from "../../images/enneagram-chart/SVG/4.svg";
import five from "../../images/enneagram-chart/SVG/5.svg";
import six from "../../images/enneagram-chart/SVG/6.svg";
import seven from "../../images/enneagram-chart/SVG/7.svg";
import eight from "../../images/enneagram-chart/SVG/8.svg";
import nine from "../../images/enneagram-chart/SVG/9.svg";
import mainLine from "../../images/enneagram-chart/SVG/lines.svg";
import { Link } from "react-router-dom";

export default function Enneagram() {
  // gsap animation
  let titleItem = useRef(null);
  let chartItem = useRef(null);

  useEffect(() => {
    gsap.from(titleItem, 4, {
      delay: 0.8,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.from(chartItem, 4, {
      delay: 1,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
  }, []);

  function TypeButton({ route, styling, image }) {
    return (
      <Link to={route}>
        <img className={styling} src={image} alt="แผนผังนพลักษณ์" />
      </Link>
    );
  }

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
            <h1
              className="text-4xl font-semibold text-gray-900"
              ref={(el) => {
                titleItem = el;
              }}
            >
              รู้จักกับลักษณ์ทั้ง 9
            </h1>
            <div
              className="relative w-400 sm:w-600 sm:h-600"
              ref={(el) => {
                chartItem = el;
              }}
            >
              <TypeButton
                route="/Exhibition/Enneagram/Perfectionist"
                styling="absolute top-12 right-16 w-14 sm:w-20 sm:h-20 sm:right-24 sm:top-16 cursor-pointer"
                image={one}
              />
              <TypeButton
                route="/Exhibition/Enneagram/Giver"
                styling="absolute top-36 right-2 w-14 sm:w-20 sm:h-20 sm:right-0 sm:top-1/2 sm:-mt-20 cursor-pointer"
                image={two}
              />
              <TypeButton
                route="/Exhibition/Enneagram/Performer"
                styling="absolute bottom-24 -mb-2 right-6 w-14 sm:w-20 sm:h-20 sm:bottom-32 sm:right-8 cursor-pointer"
                image={three}
              />
              <TypeButton
                route="/Exhibition/Enneagram/Individualist"
                styling="absolute bottom-5 right-28 w-14 sm:w-20 sm:h-20 sm:bottom-5 sm:right-40 cursor-pointer"
                image={four}
              />
              <TypeButton
                route="/Exhibition/Enneagram/Observer"
                styling="absolute bottom-5 left-28 w-14 sm:w-20 sm:h-20 sm:bottom-5 sm:left-40 cursor-pointer"
                image={five}
              />
              <TypeButton
                route="/Exhibition/Enneagram/Questioner"
                styling="absolute bottom-24 -mb-2 left-6 w-14 sm:w-20 sm:h-20 sm:bottom-32 sm:left-8 cursor-pointer"
                image={six}
              />
              <TypeButton
                route="/Exhibition/Enneagram/Enthusiast"
                styling="absolute top-36 left-2 w-14 sm:w-20 sm:h-20 sm:left-0 sm:top-1/2 sm:-mt-20 cursor-pointer"
                image={seven}
              />
              <TypeButton
                route="/Exhibition/Enneagram/Boss"
                styling="absolute top-12 left-16 w-14 sm:w-20 sm:h-20 sm:left-24 sm:top-16 cursor-pointer"
                image={eight}
              />
              <TypeButton
                route="/Exhibition/Enneagram/Peacemaker"
                styling="absolute w-14 left-44 -ml-1 top-2 sm:left-1/2 sm:-ml-10 sm:w-20 sm:h-20 cursor-pointer"
                image={nine}
              />

              <div className="p-8">
                <img src={mainLine} alt="Enneagram Chart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
