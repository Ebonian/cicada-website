import { motion } from "framer-motion";
import React from "react";
import SelectType from "../../components/SelectType";
import Navigation from "../../components/Navigation";

export default function Q9() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      <div className="flex justify-center items-start py-32 sm:py-24 h-auto sm:h-screen w-full">
        <SelectType
          title="ก่อนที่เราจะเริ่มขั้นตอนแรก มาเลือกลักษณ์ของคุณก่อน"
          subtitle=""
          r="/Problem/q11"
          s1="/Problem/q12"
          s2="/Problem/q13"
          s3="/Problem/q14"
          s4="/Problem/q15"
          s5="/Problem/q16"
          s6="/Problem/q17"
          s7="/Problem/q18"
          s8="/Problem/q19"
          s9="/Problem/q20"
          //
          s10="/Problem/q21"
          s11="/Problem/q22"
          s12="/Problem/q23"
          s13="/Problem/q24"
          s14="/Problem/q25"
          s15="/Problem/q26"
          s16="/Problem/q27"
          s17="/Problem/q28"
          s18="/Problem/q29"
          //
          s19="/Problem/q30"
          s20="/Problem/q30"
          s21="/Problem/q30"
          s22="/Problem/q30"
          s23="/Problem/q30"
          s24="/Problem/q30"
          s25="/Problem/q30"
          s26="/Problem/q30"
          s27="/Problem/q30"
          //
          s28="ลักษณ์ 1"
          s29="ลักษณ์ 2"
          s30="ลักษณ์ 3"
          s31="ลักษณ์ 4"
          s32="ลักษณ์ 5"
          s33="ลักษณ์ 6"
          s34="ลักษณ์ 7"
          s35="ลักษณ์ 8"
          s36="ลักษณ์ 9"
        />
      </div>
    </motion.div>
  );
}
