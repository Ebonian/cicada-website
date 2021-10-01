import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
import Choices from "../../components/Choices";

export default function Q999() {

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
          title="กลับไปอ่านอีกรอบนะ" 
          subtitle="" 
          q1="ไปอ่าน"
          r1="/Problem/q77" />
        </div>
      </div>
    </motion.div>
  );
}
