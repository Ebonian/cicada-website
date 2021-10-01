import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q30 extends Component {
  render() {
    const { s3 } = this.props.location.state;
    // console.log(s3);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          <Choices
            title="สุขภาพที่คุณอยากพัฒนาคือด้านไหน"
            subtitle=""
            q1="การนอน"
            q2="ดูแลการกิน"
            q3="การออกกำลังกาย"
            r1="/Problem/q31"
            r2="/Problem/q33"
            r3="/Problem/q35"
            s1={s3}
            s2={s3}
            s3={s3}
          />
        </div>
      </motion.div>
    );
  }
}
