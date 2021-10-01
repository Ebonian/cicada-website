import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
// import Choices from "../../components/Choices";

export default function Q39() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 16, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" });
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
            มันเป็นเรื่องธรรมดามากที่เราจะรู้สึกไม่สมบูรณ์เหมือนที่เราหวังอยากให้สิ่งต่าง
            ๆ เป็น มันโอเคเหมือกันที่เราจะแสดงออกซึ่งอารมณ์ได้
            มันคือส่วนหนึ่งของความเป็นมนุษย์ และมันก็ไม่ได้ผิดอะไรเลย
            เราดีใจนะที่คุณสามารถตอบได้ว่า
            <span className="underline">
              คุณกดอารมณ์ความรู้สึกอะไรไว้ภายใต้ความคิดคุณ
            </span>
            อยากให้ใช้เวลาตรงนี้ลองคิดดูนะว่าอารมณ์นั้นคืออะไร
          </h1>
        </div>
        <div
          ref={(el) => {
            secondItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Input
            title="อารมณ์ความรู้สึกนั้นคืออะไร? (รู้นะว่ามี)"
            subtitle=""
            q1=""
            q2="ต่อไป"
            r1=""
            r2="/Problem/q40"
            s1=""
            s2=""
          />
        </div>
      </div>
    </motion.div>
  );
}
