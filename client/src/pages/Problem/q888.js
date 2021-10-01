import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
import Choices from "../../components/Choices";

export default function Q888() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      <div className="flex justify-center items-center h-screen w-full">

        <div
        >
          <Choices 
          title="เราอยากให้คุณลองนะ แต่เราแนะนำว่า คุณควรสื่อสารอย่างเข้าใจอีกฝ่ายมาก ๆ เพราะสิ่งดี ๆ จะเกิดขึ้นได้ถ้าหากเราพยายามทำความเข้าใจกันและกัน" 
          subtitle="" 
          q1="เข้าใจแล้ว"
          r1="/Problem/q78" />
        </div>
      </div>
    </motion.div>
  );
}
