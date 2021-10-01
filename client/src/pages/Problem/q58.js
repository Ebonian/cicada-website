import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
// import Choices from "../../components/Choices";

export default function Q58() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 7, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(secondItem, 1, { delay: 7, opacity: 0, display: "none" })
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
            ไม่เป็นไรหรอก มุมมองของความรู้สึกเราไม่ได้เปิดหรือเปิดง่าย ๆ
            เหมือนสวิตช์ใช่มั้ยล่ะ มันใช้เวลาแหละ
          </h1>
        </div>
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            เราทำได้ดีที่สุดคือไม่ยึดติดและเป็นทุกข์ไปกับมัน
          </h1>
        </div>
        <div
          ref={(el) => {
            thirdItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Input
            title="คุณแค่ต้องตัดสินใจว่าหลังจากนี้คุณจะทำยังไงก็แค่นั้นเอง ไหนลองบอกหน่อยได้มั้ย"
            subtitle=""
            q1=""
            q2="ต่อไป"
            r1=""
            r2="/Problem/q49"
            s1=""
            s2=""
          />
        </div>
      </div>
    </motion.div>
  );
}
