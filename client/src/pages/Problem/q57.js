import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
// import Choices from "../../components/Choices";

export default function Q57() {
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
            เป็นเรื่องธรรมดามากที่เราจะรู้สึกฟุ้งซ่านหรือลงลืมหลาย ๆ
            สิ่งจนสุดท้ายไม่ได้ทำอะไรเลยในระหว่างวัน
            เรารู้ว่าคุณไม่อยากเป็นแบบนั้นจนรู้สึกเศร้าหรือสับสน
            หรือไม่พอใจในตัวเองที่เป็นแบบนี้ แต่เชื่อเถอะว่า
            คุณสามารถเริ่มใหม่ได้ในทุก ๆ วันที่มีโอกาส แต่ว่าตอนนี้
            เราอยากให้คุณได้ทบทวนสิ่งที่เกิดขึ้นตลอดที่ผ่านมา
            แล้วดูว่าคุณค้นพบอะไรบ้าง
          </h1>
        </div>
        <div
          ref={(el) => {
            secondItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Input
            title="คุณอยากอธิบายความรู้สึกที่ผ่านมาว่าอย่างไร"
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
