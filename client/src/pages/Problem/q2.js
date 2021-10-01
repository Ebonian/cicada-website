import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q2 extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          <Choices
            title="เยี่ยมเลย แล้วมีบางอย่างที่อยากทำให้ดีขึ้นอีกมั้ย"
            subtitle=""
            q1="มี"
            q2="ไม่มี"
            q3=""
            r1="/Problem/q9"
            r2="/Problem/q5"
            r3="/"
            s1=""
            s2="/Problem/q2"
            s3=""
          />
        </div>
      </motion.div>
    );
  }
}
