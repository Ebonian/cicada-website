import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
import Choices from "../../components/Choices";

export default function Q49() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 2, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(secondItem, 1, { delay: 5.5, opacity: 0, display: "none" })
      .from(thirdItem, 1, { delay: 0.3, opacity: 0, display: "none" });
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
            วิเศษไปเลย
          </h1>
        </div>

        <div
          className="flex text-center max-w-screen-sm"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            เราดีใจที่ได้ร่วมเป็นส่วนหนึ่งของการทำให้คุณเป็นคุณในเวอร์ชั่นที่ดีขึ้น
          </h1>
        </div>

        <div
          ref={(el) => {
            thirdItem = el;
          }}
        >
          <Choices
            title="ก่อนจะจากกัน เราอยากรู้ว่าคุณยินดีที่จะแบ่งปันคำตอบเมื่อครู่กับคนอื่น ๆ ได้หรือไม่"
            subtitle=""
            q1="แน่นอน"
            q2="ไม่ละ ขอบคุณ"
            q3=""
            r1="/Problem/q50"
            r2="/Problem/q51"
            r3=""
            s1=""
            s2=""
            s3=""
          />
        </div>
      </div>
    </motion.div>
  );
}
