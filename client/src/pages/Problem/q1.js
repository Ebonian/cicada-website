import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q1 extends Component {
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
            title="คุณรู้สึกพอใจกับชีวิตของตัวเองตอนนี้หรือไม่"
            subtitle=""
            q1="ค่อนข้างพอใจ"
            q2="ไม่ค่อยเลย"
            q3="เฉย ๆ แหละ"
            r1="/Problem/q2"
            r2="/Problem/q4"
            r3="/Problem/q3"
          />
        </div>
      </motion.div>
    );
  }
}
