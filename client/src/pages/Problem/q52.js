import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
// import Choices from "../../components/Choices";

export default function Q52(props) {
  const { s } = props.location.state;
  // console.log(s);

  function Type2() {
    let firstItem = useRef(null);
    let secondItem = useRef(null);

    useEffect(() => {
      gsap
        .timeline()
        .from(firstItem, 2, { delay: 1, opacity: 0 })
        .to(firstItem, 1, { delay: 13, opacity: 0, display: "none" })
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
            เป็นเรื่องธรรมดามากที่เราจะรู้สึกผิดหวังจากผู้อื่น
            แต่มันเป็นเรื่องธรรมดานะรู้มั้ย
            เพราะว่าโลกนี้เนี่ยมันเอาแน่นอนอะไรไม่ได้เลยกับการคาดหวังกับอะไรก็ตาม
            แต่มันก็ไม่ใช่เรื่องผิดเลย
            เราแค่ต้องรู้ว่าจะจัดการกับความรู้สึกพวกนั้นยังไง
          </h1>
        </div>
        <div
          ref={(el) => {
            secondItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Input
            title="ปกติเวลาเป็นแบบนั้น รู้ตัวมั้ย หรือเป็นเวลาอยู่กับใคร"
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
    );
  }
  function Type3() {
    let firstItem = useRef(null);
    let secondItem = useRef(null);

    useEffect(() => {
      gsap
        .timeline()
        .from(firstItem, 2, { delay: 1, opacity: 0 })
        .to(firstItem, 1, { delay: 13, opacity: 0, display: "none" })
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
            เป็นเรื่องธรรมดามากที่เราจะรู้สึกกดดันจากการต้องปรับตัวตามสภาพแว้ดล้อมหรือผู้คนที่ต่างกัน
            การไม่ได้เป็นตัวเองนั้นก็เป็นเรื่องที่เหนื่อยอยู่แล้ว
            ยิ่งเราพยายามจะสวมใส่บางอย่างเข้ามาในตัวเรา มันก็ยิ่งเป็นภาระ
            แต่มันก็ไม่ใช่เรื่องผิดเลยนะ
            เราแค่ต้องรู้ว่าทำยังไงเราถึงจะไม่เบียดเบียนตัวเองได้
          </h1>
        </div>
        <div
          ref={(el) => {
            secondItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Input
            title="ปกติเวลาเป็นแบบนั้น รู้ตัวมั้ย หรือเป็นเวลาอยู่กับใคร"
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
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      {s === "ลักษณ์ 2" ? <Type2 /> : <Type3 />}
    </motion.div>
  );
}
