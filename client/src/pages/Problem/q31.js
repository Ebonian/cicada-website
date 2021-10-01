import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q31 extends Component {
  render() {
    const { s1 } = this.props.location.state;
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
            title="ทำไมคุณจึงอยากพัฒนาการนอน?"
            subtitle=""
            q1="อยากนอนให้เป็นเวลากว่านี้"
            q2="นอนไม่หลับ"
            q3="เหตุผลอื่น"
            r1="/Problem/q32"
            r2="/Problem/q32"
            r3="/Problem/q32"
            s={s1}
          />
        </div>
      </motion.div>
    );
  }
}
