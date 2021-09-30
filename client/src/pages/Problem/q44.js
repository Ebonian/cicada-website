import { motion } from "framer-motion";
import React, { Component } from "react";
// import Choices from "../../components/Choices";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";

export default class q44 extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          <Input
            title="มีสาเหตุที่ลึก กว่านั้นมั้ย"
            subtitle=""
            q1="ไม่อะ นี่ลึกสุดแล้ว"
            q2="ต่อไป"
            r1="/Problem/q45"
            r2="/Problem/q46"
          />
        </div>
      </motion.div>
    );
  }
}
