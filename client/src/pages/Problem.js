import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Navigation from "../components/Navigation";
import { gsap } from "gsap";
import Choices from "../components/Choices";

export default function Problem() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);
  let fourthItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 2, opacity: 0 })
      .to(firstItem, 1, { delay: 4, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(secondItem, 1, { delay: 5, opacity: 0, display: "none" })
      .from(thirdItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(thirdItem, 1, { delay: 4, opacity: 0, display: "none" })
      .from(fourthItem, 1, { delay: 0, opacity: 0, display: "none" });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" />
      <div className="flex justify-center items-center h-screen w-full px-5 text-center">
        <div
          ref={(el) => {
            firstItem = el;
          }}
        >
          <p className="text-xl font-medium text-gray-700">
            ต่อไปนี้จะเป็นการพูดคุยเล็ก ๆ ระหว่างพวกเราสองคนเท่านั้น
          </p>
        </div>
        <div
          ref={(el) => {
            secondItem = el;
          }}
        >
          <p className="text-xl font-medium text-gray-700">
            สิ่งที่เราคุยกันนั้นจะเป็นความลับแน่นอน ถ้าคุณอยากให้มันเป็นแบบนั้น
          </p>
        </div>
        <div
          ref={(el) => {
            thirdItem = el;
          }}
        >
          <p className="text-xl font-medium text-gray-700">
            หลังจากนี้ทำจิตใจให้ปลอดโปร่งนะ ถ้าพร้อมแล้วมาเริ่มกันเลย
          </p>
        </div>
        <div
          ref={(el) => {
            fourthItem = el;
          }}
        >
          <Choices
            title="คุณเคยศึกษานพลักษณ์ (Enneagram) หรือรู้จักลักษณ์ของตัวเองมาก่อนหรือไม่"
            subtitle=""
            q1="เคย"
            q2="ไม่เคยเลย"
            q3="เคย แต่ยังไม่รู้ลักษณ์ตัวเอง"
            r1="/Problem/q1"
            r2="/Problem/q8"
            r3="/Problem/q8"
          />
        </div>
      </div>
    </motion.div>
  );
}
