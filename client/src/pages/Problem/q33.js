import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q33 extends Component {
  render() {
    const { s2 } = this.props.location.state;
    // console.log(s2);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          <Choices
            title="ทำไมคุณจึงอยากพัฒนาเรื่องดูแลการกิน?"
            subtitle=""
            q1="เพิ่ม/ลด น้ำหนัก"
            q2="กินผิดเวลา"
            q3="เหตุผลอื่น"
            r1="/Problem/q34"
            r2="/Problem/q34"
            r3="/Problem/q34"
            s={s2}
          />
        </div>
      </motion.div>
    );
  }
}
