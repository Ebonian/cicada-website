import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";

export default function Q42() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 3, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(secondItem, 1, { delay: 2, opacity: 0, display: "none" })
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
            ในตอนนี้ คุณก็เข้าใจความต้องการของตัวเองแล้วสินะ
            การที่เราเข้าใจความต้องการของตัวเอง ก็ถือเป็นความสำเร็จแรกแล้วล่ะ
          </h1>
        </div>
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            พร้อมสำหรับขั้นต่อไปหรือยัง?
          </h1>
        </div>
        <div
          ref={(el) => {
            thirdItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Input
            title="อะไรที่ทำให้คุณรู้ว่านี่คือสิ่งที่คุณอยากพัฒนา เล่าให้ฟังได้มั้ย เป็นเหตุการณ์ ความคิด หรือความรู้สึกก็ได้"
            subtitle=""
            q1="ข้ามไปก่อน"
            q2="ต่อไป"
            r1="/Problem/q47"
            r2="/Problem/q44"
            s1="q42"
          />
        </div>
      </div>
    </motion.div>
  );
}
