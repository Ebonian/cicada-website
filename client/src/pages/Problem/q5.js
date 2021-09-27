import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q5 extends Component {
  render() {
    const { s2 } = this.props.location.state;
    console.log("From page " + s2);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          <Choices
            title="จริงหรอเนี่ย ไม่มีหรือไม่อยากบอกกันแน่"
            subtitle=""
            q1="จริง ๆ บอกก็ได้"
            q2="ไม่อยากบอก"
            q3="ไม่มี"
            r1={s2}
            r2="/Problem/q7"
            r3="/Problem/q6"
            s1=""
            s2="/Problem/q4"
            s3=""
          />
        </div>
      </motion.div>
    );
  }
}
