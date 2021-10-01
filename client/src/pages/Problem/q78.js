import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default function Q78() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 4, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(secondItem, 1, { delay: 3, opacity: 0, display: "none" })
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
          ไม่มีอะไรจะดีไปกว่าการแก้ปัญหากันด้วยความเข้าใจแล้วล่ะ ถ้าหากคุณไม่รู้ว่าอีกฝ่ายต้องการอะไร
          คงยากมากที่คุณจะทำอะไรให้ถูกใจได้ กลับกัน มันจะง่ายกว่ามากถ้าหากคุณได้บอกความคาดหวังของคุณ
          </h1>
        </div>
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
          ความแตกต่างไม่ใช่เรื่องผิด มันไม่ใช่ปัญหา ปัญหาที่แท้จริงเกิดจากความไม่เข้าใจ
          </h1>
        </div>
        <div
          ref={(el) => {
            thirdItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Choices
            title="ไปต่อนะ?"
            subtitle=""
            q1="โอเค"
            r1="/Problem/q48"
            s1="q47"
          />
        </div>
      </div>
    </motion.div>
  );
}
