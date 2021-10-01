import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
import Choices from "../../components/Choices";

export default function Q76() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 3, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
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
          ว่ากันว่า การสื่อสารที่ดีคือจุดเริ่มต้นของการแก้ปัญหาความสัมพันธ์ (การใช้ชีวิตกับผู้อื่น)
          </h1>
        </div>

        <div
          ref={(el) => {
            secondItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Choices 
          title="คุณเคยลองสื่อสารสิ่งที่คุณต้องการออกไปหรือเปล่า" 
          subtitle="" 
          q1="ลองแล้ว แต่ไม่แน่ใจว่านี่คือวิธีที่ดีที่สุด"
          q2="ลองแล้ว มันไม่เวิร์คเลย" 
          q3="ยังไม่เคย" 
          r1="/Problem/q78" 
          r2="/Problem/q77" 
          r3="/Problem/q888"/>
        </div>
      </div>
    </motion.div>
  );
}
