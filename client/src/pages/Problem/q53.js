import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
// import Choices from "../../components/Choices";

export default function Q53() {
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
            เป็นเรื่องธรรมดามากที่เราจะรู้สึกผิดหวังกับอดีตที่ผ่านมา
            เหมือนว่าเราจะกลับไปแก้อะไรได้ แต่ทุกคนก็รู้ว่ามันไม่ได้ใช่มั้ยละ
            หรือรู้สึกว่าอนาคตมันมีอะไรที่ดีกว่านี้รอเราอยู่
            คือเราอาจจะหลงลืมกับการอยู่กับปัจจุบันไปบ้างใช่มั้ยละ
            แต่มันก็ไม่ใช่เรื่องผิดเลยนะ เราแค่ต้องรู้จักที่จะกลับมาที่
            <span className="underline">ปัจจุบัน</span>
            และมีความสุขกับสิ่งที่เรามีตอนนี้ให้ได้
          </h1>
        </div>
        <div
          ref={(el) => {
            secondItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Input
            title="ปกติเวลามีความรู้สึกแบบนั้น รู้ตัวมั้ย มันเป็นยังไง เล่าให้ฟังหน่อย"
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
