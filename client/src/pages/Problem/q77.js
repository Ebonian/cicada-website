import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
import Choices from "../../components/Choices";

export default function Q77() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 3, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(secondItem, 1, { delay: 4, opacity: 0, display: "none" })
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
            แน่นอนว่า ทุกคนต่างมีวิธีการมองโลกที่แตกต่างกัน
            บางทีการสื่อสารที่คุณใช้อาจจะไม่ได้ผลอย่างที่คุณต้องการ เราแนะนำว่า
            ให้คุณลองเปลี่ยนวิธีการสื่อสาร
          </h1>
        </div>

        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            มันไม่ใช่การแย้ง / เถียง / หาข้ออ้าง / ประชด / ดูถูก หรือซ้ำเติมใด ๆ
            ทั้งนั้น ประเด็นคือการที่รู้ว่าแต่ละคนนั้นแตกต่างกัน
            แล้วจะอยู่ร่วมกันได้อย่างไร หาจุดตรงกลาง เจอกันครึ่งทาง
          </h1>
        </div>

        <div
          ref={(el) => {
            thirdItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Choices
            title="ถึงตรงนี้ เข้าใจที่บอกไหม"
            subtitle=""
            q1="เข้าใจเลยล่ะ"
            q2="ไม่"
            r1="/Problem/q79"
            r2="/Problem/q999"
          />
        </div>
      </div>
    </motion.div>
  );
}
