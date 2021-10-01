import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
// import Choices from "../../components/Choices";

export default function Q48(props) {
  const { s1 } = props.location.state;
  console.log(s1);

  function See() {
    let firstItem = useRef(null);
    let secondItem = useRef(null);
    let thirdItem = useRef(null);

    useEffect(() => {
      gsap
        .timeline()
        .from(firstItem, 2, { delay: 1, opacity: 0 })
        .to(firstItem, 1, { delay: 5, opacity: 0, display: "none" })
        .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
        .to(secondItem, 1, { delay: 7.5, opacity: 0, display: "none" })
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
            ส่วนนี้สำคัญที่สุดแล้วสำหรับประสบการณ์ของคุณในช่วงเวลานี้
          </h1>
        </div>
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            คุณไม่จำเป็นจะต้องรู้เรื่องราวตั้งแต่ต้นจนจบเพื่อที่จะไปให้ถึงสิ่งนั้นก็ได้
            ขอแค่คุณมีก้าวแรก
          </h1>
        </div>
        <div
          ref={(el) => {
            thirdItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Input
            title="หลังจากนี้ ก้าวแรกของคุณคืออะไร"
            subtitle=""
            q1=""
            q2="ต่อไป"
            r1=""
            r2="/Problem/q49"
          />
        </div>
      </div>
    );
  }

  function Blind() {
    let firstItem = useRef(null);
    let secondItem = useRef(null);
    let thirdItem = useRef(null);

    useEffect(() => {
      gsap
        .timeline()
        .from(firstItem, 2, { delay: 1, opacity: 0 })
        .to(firstItem, 1, { delay: 5, opacity: 0, display: "none" })
        .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
        .to(secondItem, 1, { delay: 7.5, opacity: 0, display: "none" })
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
            ไม่เป็นไร การมีเป้าหมายที่ชัดเจนก็เป็นเรื่องยากเหมือนกัน
            เราไม่ได้คาดหวังให้ทุกคนได้เป้าหมายหลังจากนี้หรอก
          </h1>
        </div>
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            เพราะอย่างน้อยคุณก็รู้แล้วว่าคุณยังไม่พอใจกับส่วนไหนของตัวเอง
            นั่นคือหนึ่งในความสำเร็จแล้ว จำได้มั้ย? คุณแค่ต้องตัดสินใจว่า
            หลังจากนี้คุณจะทำอะไร
          </h1>
        </div>
        <div
          ref={(el) => {
            thirdItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Input
            title="หลังจากนี้ ก้าวแรกของคุณคืออะไร"
            subtitle=""
            q1=""
            q2="ต่อไป"
            r1=""
            r2="/Problem/q49"
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
      {s1 ? <See /> : <Blind />}
    </motion.div>
  );
}
