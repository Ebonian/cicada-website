import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q28 extends Component {
  render() {
    const { s2 } = this.props.location.state;
    const { s5 } = this.props.location.state;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          <Choices
            title="ลักษณ์ 8 ส่วนใหญ่จะอยากพัฒนาการสื่อสารกับผู้อื่นให้ถูกต้องมากขึ้น คุณเป็นแบบนั้นหรือเปล่า"
            subtitle=""
            q1="ใช่"
            q2="ไม่นะ"
            q3=""
            r1={s2}
            r2={s5}
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
