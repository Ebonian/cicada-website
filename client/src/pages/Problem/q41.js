import { motion } from "framer-motion";
import React, { Component } from "react";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";

export default class q41 extends Component {
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
            title="งั้นบอกหน่อยสิว่าอยากพัฒนาส่วนไหนของจิตใจ"
            subtitle=""
            r2="/Problem/q42"
          />
        </div>
      </motion.div>
    );
  }
}
