import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q72 extends Component {
  render() {
    // const { s1 } = this.props.location.state;
    // const { s4 } = this.props.location.state;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          <Choices
            title="อะไรทำให้คุณรู้สึกไม่พอใจมากที่สุด"
            subtitle=""
            q1="เขากดดันคุณ"
            q2="อื่นๆ"
            q3=""
            r1="/Problem/q73"
            r2="/Problem/q74"
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
