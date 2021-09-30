import { motion } from "framer-motion";
import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default class q51 extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex flex-col justify-center items-center h-screen w-full px-5 md:px-0">
          <div className="text-center w-80 md:w-96 font-medium text-lg mb-6">
            <div>
              <h1 className="text-gray-800 font-medium text-3xl mb-14 leading-loose">
                ขอบคุณอีกครั้งสำหรับการแบ่งปันและความคิดเห็นนะ
              </h1>
            </div>
            <div className="flex flex-col items-center space-y-8">
              <div className="flex duration-300 items-center text-xl space-x-2 text-gray-800 hover:text-gray-500 space-x-4">
                <Link to="/Exhibition">กลับไปยังนิทรรศการ</Link>
                <FiArrowRight />
              </div>
              <div className="flex duration-300 items-center text-xl space-x-2 text-gray-800 hover:text-gray-500 space-x-4">
                <Link to="/Problem/Feedback">Feedback จากผู้เข้าชม</Link>
                <FiArrowRight />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
