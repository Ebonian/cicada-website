import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
// import Choices from "../../components/Choices";

export default function Q55(props) {
  const { s } = props.location.state;
  // console.log(s);

  function Type6() {
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
          <Input
            title="คุณค้นพบอะไรระหว่างการทบทวนแล้วบ้าง"
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
  function Type7() {
    let firstItem = useRef(null);
    let secondItem = useRef(null);

    useEffect(() => {
      gsap
        .timeline()
        .from(firstItem, 2, { delay: 1, opacity: 0 })
        .to(firstItem, 1, { delay: 15, opacity: 0, display: "none" })
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
            เป็นเรื่องธรรมดามากที่เราจะมีความรู้สึกเบื่อกับหลาย ๆ
            อย่างจนทำให้เรารู้สึกไม่เป็นชิ้นเป็นอันกับอะไรเลย
            บางครั้งคุณอาจรู้สึกเสียเวลา
            แม้คุณจะรู้สึกไม่ดีกับตัวเองที่เป็นแบบนี้
            แต่เราอยากให้คุณรู้ว่ามันไม่ใช่เรื่องที่ไม่ดีเลย
            เราต่างก็สามารถมีความสนใจที่หลากหลายได้ เพียงแค่เรารู้จักตัวเองให้ดี
            และใช้ทุกอย่างให้เป็นประโยชน์เท่าที่เราทำได้
            แต่ตอนนี้อยากให้ลองทบทวนช่วงเวลาที่รู้สึกไม่ดีกับตัวเองก่อนนะ
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
      {s === "ลักษณ์ 6" ? <Type6 /> : <Type7 />}
    </motion.div>
  );
}
