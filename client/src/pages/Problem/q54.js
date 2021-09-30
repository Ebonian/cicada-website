import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
// import Choices from "../../components/Choices";

export default function Q54() {
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
            เป็นเรื่องธรรมดามากที่เราเลือกจะไม่สนใจความรู้สึกตัวเองแค่เพราะเรารู้สึกว่ามันไม่น่าเชื่อถือพอหรือว่าเสียเวลาเกินกว่าจะเอามาคิดทบทวน
            ซึ่งมันก็ไม่ผิด มันคือทางเลือกของเรา เราสามารถกำหนดได้ว่าเราจะทำอะไร
            แต่ว่าต้องไม่ลืมว่าความรู้สึกคือสิ่งที่ทำให้คนเป็นคน
            หากเราไปทางนึงมากไปมันก็ไม่ดีหรอกนะ
          </h1>
        </div>
        <div
          ref={(el) => {
            secondItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Input
            title="อยากฟังเหตุผลว่าทำไมเลือกที่จะไม่สนใจความรู้สึกล่ะ"
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
