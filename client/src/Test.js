import React from "react";
import Choices from "./components/Choices";
import { motion } from "framer-motion";

export default function Test() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-center items-center h-screen w-full">
        <Choices
          title="คุณเคยศึกษานพลักษณ์ (Enneagram) หรือรู้จักลักษณ์ของตัวเองมาก่อนหรือไม่"
          subtitle=""
          q1="เคย"
          q2="ไม่เคยเลย"
          q3="ก็เคย แต่ยังลักษณ์ตัวเอง"
          r1="/"
          r2="/Exhibition/Stereotype"
          r3="/Exhibition/Stereotype"
        />
      </div>
    </motion.div>
  );
}
