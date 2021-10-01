import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
import Choices from "../../components/Choices";

export default function Q40() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 3, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(secondItem, 1, { delay: 11, opacity: 0, display: "none" })
      .from(thirdItem, 1, { delay: 0.3, opacity: 0, display: "none" });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      <div className="flex justify-center items-center h-screen w-full">
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            firstItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            เก่งมากเลย
          </h1>
        </div>
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            แต่ต่อจากนี้ ถึงเราจะไม่ได้อยู่รับฟังคุณแล้ว แต่ก็อยากให้รู้ว่า
            คุณสามารถที่จะระบายมันออกมาให้ใครฟังก็ได้นะ เพื่อนสนิท หรือไดอารี่
            หรือคนในครอบครัวต่างพร้อมรับฟังคุณตลอดเวลา
          </h1>
        </div>
        <div
          ref={(el) => {
            thirdItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Choices
            title="หลังจากที่ได้เล่าออกมาแล้ว ตอนนี้คุณมีมุมมองต่อความรู้สึกนั้นต่างออกไปหรือเปล่า"
            subtitle=""
            q1="ต่างนะ"
            q2="ไม่ต่างเท่าไหร่"
            r1="/Problem/q59"
            r2="/Problem/q58"
            s1="q47"
            s2=""
          />
        </div>
      </div>
    </motion.div>
  );
}
