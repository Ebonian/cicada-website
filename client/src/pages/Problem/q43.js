import { motion } from "framer-motion";
import React, { Component } from "react";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";

export default class q43 extends Component {
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
            title="งั้นบอกเราได้มั้ยว่าอยากพัฒนาส่วนไหนของความสัมพันธ์"
            subtitle=""
          />
        </div>
      </motion.div>
    );
  }
}
