import { motion } from "framer-motion";
import React, { Component } from "react";
// import Choices from "../../components/Choices";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";

export default class q46 extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          <Input
            title="ถ้าสิ่งนั้นหายไป คุณจะเป็นยังไง เล่าให้เราฟังหน่อยสิ"
            subtitle=""
            q1=""
            q2="ต่อไป"
            r1=""
            r2="/Problem/q47"
          />
        </div>
      </motion.div>
    );
  }
}
