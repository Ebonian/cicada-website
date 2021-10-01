import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default function Q63(props) {
  const { s2 } = props.location.state;
  function FiveHeads() {
    let firstItem = useRef(null);
    let secondItem = useRef(null);
    useEffect(() => {
      gsap
        .timeline()
        .from(firstItem, 2, { delay: 1, opacity: 0 })
        .to(firstItem, 1, { delay: 22, opacity: 0, display: "none" })
        .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" });
    }, []);
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            firstItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            เป็นเรื่องธรรมดามากที่เราจะรู้สึกอึดอัดหรือหวาดระแวงกับสิ่งรอบตัวเราเพียงเพราะเรารู้สึกไม่ไว้ใจหรือไม่ปลอดภัย
            แน่นอนว่ามันคือกลไกธรรมชาติที่สร้างขึ้นมาเพื่อให้เราพ้นอันตราย
            แต่บางครั้งมันกลับกดให้เรากลายเป็นคนที่ไม่ยืดหยุ่นและมีทัศนคติลบ
            จะดีมากเลยหากคุณได้ใช่เวลาตรงนี้เพื่อที่จะลองทบทวนความรู้สึกเหล่านั้น
          </h1>
        </div>
        <div
          ref={(el) => {
            secondItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Choices
            title="ขอบคุณที่แบ่งปันนะ มันสุดยอดมาก"
            subtitle=""
            q1="😊"
            r1="/Problem/q49"
          />
        </div>
      </div>
    );
  }
  function SixHeads() {
    let firstItem = useRef(null);
    useEffect(() => {
      gsap.from(firstItem, 2, { delay: 1, opacity: 0 });
    }, []);
    return (
      <div className="flex justify-center items-center h-screen w-full px-5 md:px-0">
        <div
          className="flex text-center max-w-screen-sm"
          ref={(el) => {
            firstItem = el;
          }}
        >
          <Choices
            title="ขอบคุณที่แบ่งปันนะ มันสุดยอดมาก"
            subtitle=""
            q1="😊"
            r1="/Problem/q49"
          />
        </div>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      {s2 === "q61" ? <FiveHeads /> : <SixHeads />}
    </motion.div>
  );
}
