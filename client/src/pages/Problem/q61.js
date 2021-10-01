import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
import Choices from "../../components/Choices";

export default function Q61(props) {
  const { s } = props.location.state;
  console.log(s.input);
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 10, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(secondItem, 1, { delay: 10, opacity: 0, display: "none" })
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
          <h1 className=" font-medium text-gray-800 text-xl leading-loose">
            ไม่กี่วันหลังจากนั้น คุณก็เผชิญปัญหานั้นซ้ำอีก แต่ครั้งนี้
            คุณกลับนึกถึงคำแนะนำที่คุณเคยให้ไว้: "{s.input}"
          </h1>
        </div>

        <div
          className="flex text-center max-w-screen-sm"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-800 text-xl leading-loose">
            คุณรู้สึกดีใจที่วันนั้นคุณเคยให้คำแนะนำเกี่ยวกับปัญหานั้นไว้
            และวันนี้คุณได้เข้าใจปัญหานั้นด้วยตนเอง
            คุณรู้ทันว่าเกิดอะไรขึ้นภายในจิตใจตนเอง
          </h1>
        </div>

        <div
          ref={(el) => {
            thirdItem = el;
          }}
        >
          <Choices
            title="ถึงตอนนี้ คุณยังมองความคิดตัวเองเหมือนเดิมอยู่หรือไม่"
            subtitle=""
            q1="ก็เปลี่ยนนะ"
            q2="เหมือนเดิม"
            q3=""
            r1="/Problem/q62"
            r2="/Problem/q63"
            r3=""
            s1=""
            s2="q61"
            s3=""
          />
        </div>
      </div>
    </motion.div>
  );
}
