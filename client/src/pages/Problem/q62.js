import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";

export default function Q62() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 8, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      <div className="flex justify-center items-center h-screen w-full px-5 md:px-0">
        <div
          className="flex text-center max-w-screen-sm"
          ref={(el) => {
            firstItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            เราอาจจะไม่ได้อยู่เตือนความจำให้คุณแล้วว่าคำแนะนำของคุณมันช่างยอดเยี่ยมขนาดไหน
            คุณคงต้องเตือนตัวเองนับจากนี้ไป
            ครั้งนี้เราจะให้โอกาสคุณได้ฝากข้อความสุดท้ายถึงตัวเอง
          </h1>
        </div>

        <div
          ref={(el) => {
            secondItem = el;
          }}
        >
          <Input
            title="ข้อความที่คุณจะฝากให้กับตัวเอง"
            subtitle=""
            q1=""
            q2="ต่อไป"
            r1=""
            r2="/Problem/q63"
            s1=""
          />
        </div>
      </div>
    </motion.div>
  );
}
