import { motion } from "framer-motion";
import React, { Component } from "react";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";

export default class q73 extends Component {
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
            title="เข้าใจละ แต่ว่าคุณช่วยเล่าเหตุการณ์ล่าสุดได้มั้ยว่าเกิดอะไรขึ้น"
            subtitle=""
            r2="/Problem/q75"
          />
        </div>
      </motion.div>
    );
  }
}
