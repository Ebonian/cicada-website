import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q35 extends Component {
  render() {
    const { s3 } = this.props.location.state;
    // console.log(s1);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          <Choices
            title="อะไรทำให้คุณคิดว่าอยากพัฒนาด้านการออกกำลังกาย?"
            subtitle=""
            q1="มีหุ่นที่ดี"
            q2="มีสุขภาพที่ดี"
            q3="เหตุผลอื่น"
            r1="/Problem/q36"
            r2="/Problem/q36"
            r3="/Problem/q36"
            s={s3}
          />
        </div>
      </motion.div>
    );
  }
}
