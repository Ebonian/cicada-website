import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
import Choices from "../../components/Choices";

export default function Q47(props) {
  const { s1 } = props.location.state;
  // console.log(s1);

  function Long() {
    let firstItem = useRef(null);
    let secondItem = useRef(null);
    let thirdItem = useRef(null);

    useEffect(() => {
      gsap
        .timeline()
        .from(firstItem, 2, { delay: 1, opacity: 0 })
        .to(firstItem, 1, { delay: 4, opacity: 0, display: "none" })
        .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
        .to(secondItem, 1, { delay: 7, opacity: 0, display: "none" })
        .from(thirdItem, 1, { delay: 0.3, opacity: 0, display: "none" });
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
            ไม่เป็นไร บางที ความคิดหรือความรู้สึกก็ไม่ได้ให้เหตุผลคุณมา
            แต่มันมีเหตุผลที่อยู่ตรงนั้นแน่ ๆ
          </h1>
        </div>
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            เค้าว่ากันว่า จิตเรามีศักยภาพมาก ๆ
            ที่สามารถทำให้สิ่งที่เราหวังเป็นจริงได้
            เราอยากให้คุณใช้เวลาตรงนี้เพื่อจินตนาการตัวคุณ
            ในเวอร์ชั่นที่คุณอยากเป็นตัวคุณที่ดีกว่าตอนนี้
          </h1>
        </div>
        <div
          ref={(el) => {
            thirdItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Choices
            title="คุณเห็นเป้าหมายตัวเองมั้ย?"
            subtitle=""
            q1="เห็น"
            q2="ไม่ค่อย"
            r1="/Problem/q48"
            r2="/Problem/q48"
            s1="q47"
            s2=""
          />
        </div>
      </div>
    );
  }

  function Short() {
    let firstItem = useRef(null);
    let secondItem = useRef(null);

    useEffect(() => {
      gsap
        .timeline()
        .from(firstItem, 2, { delay: 1, opacity: 0 })
        .to(firstItem, 1, { delay: 7, opacity: 0, display: "none" })
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
            เค้าว่ากันว่า จิตเรามีศักยภาพมาก ๆ
            ที่สามารถทำให้สิ่งที่เราหวังเป็นจริงได้
            เราอยากให้คุณใช้เวลาตรงนี้เพื่อจินตนาการตัวคุณ
            ในเวอร์ชั่นที่คุณอยากเป็น ตัวคุณที่ดีกว่าตอนนี้
          </h1>
        </div>
        <div
          ref={(el) => {
            secondItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Choices
            title="คุณเห็นเป้าหมายตัวเองมั้ย?"
            subtitle=""
            q1="เห็น"
            q2="ไม่ค่อย"
            r1="/Problem/q48"
            r2="/Problem/q48"
            s1="q47"
            s2=""
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
      {s1 ? <Long /> : <Short />}
    </motion.div>
  );
}
