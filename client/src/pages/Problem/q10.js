import { motion } from "framer-motion";
import React from "react";
import SelectType from "../../components/SelectType";
import Navigation from "../../components/Navigation";

export default function Q10() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      <div className="flex justify-center items-start py-32 sm:py-24 h-auto sm:h-screen w-full">
        <SelectType
          title="ก่อนอื่นเลย คุณบอกได้มั้ยว่าคุณเป็นลักษณ์ไหน"
          subtitle=""
          r="/Problem/q37"
          s1="ลักษณ์ 1"
          s2="ลักษณ์ 2"
          s3="ลักษณ์ 3"
          s4="ลักษณ์ 4"
          s5="ลักษณ์ 5"
          s6="ลักษณ์ 6"
          s7="ลักษณ์ 7"
          s8="ลักษณ์ 8"
          s9="ลักษณ์ 9"
        />
      </div>
    </motion.div>
  );
}
