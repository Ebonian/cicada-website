import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q17 extends Component {
  render() {
    const { s1 } = this.props.location.state;
    const { s4 } = this.props.location.state;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          <Choices
            title="ปกติแล้ว ลักษณ์ 6 จะอยากพัฒนาเรื่องความปล่อยวางหรือความเป็นกลาง ใช่สิ่งที่คุณอยากพัฒนาหรือเปล่า"
            subtitle=""
            q1="ใช่"
            q2="ไม่นะ"
            q3=""
            r1={s1}
            r2={s4}
            r3=""
            s1=""
            s2=""
            s3=""
          />
        </div>
      </motion.div>
    );
  }
}
