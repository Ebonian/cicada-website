import { motion } from "framer-motion";
import React, { Component } from "react";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";

export default class q59 extends Component {
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
            title="ต่อไปนี้ ถ้าไม่มีเรา คุณจะจัดการกับความรู้สึกนั้นยังไง"
            subtitle=""
            q1=""
            q2="ต่อไป"
            r1=""
            r2="/Problem/q49"
            s1=""
            s2=""
          />
        </div>
      </motion.div>
    );
  }
}
