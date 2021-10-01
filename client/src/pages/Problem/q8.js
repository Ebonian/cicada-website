import { motion } from "framer-motion";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";

export default function Q8() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 1.4, { delay: 2, opacity: 0 })
      .to(firstItem, 1, { delay: 2, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      <div className="flex justify-center items-center h-screen w-full">
        <div
          ref={(el) => {
            firstItem = el;
          }}
        >
          <p className="text-xl font-medium text-gray-700">
            ถ้าอย่างนั้นเราขอแนะนำให้ไปชมนิทรรศการก่อนนะ
          </p>
        </div>
        <div
          className="flex flex-col items-center space-y-8"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <div className="flex duration-300 items-center text-xl space-x-2 text-gray-800 hover:text-gray-500 space-x-4">
            <Link to="/Exhibition">กลับไปชมนิทรรศการ</Link>
            <FiArrowRight />
          </div>
          <div className="flex duration-300 items-center text-xl space-x-2 text-gray-800 hover:text-gray-500 space-x-4">
            <Link to="/Exhibition/Sterotype">นพลักษณ์คืออะไร</Link>
            <FiArrowRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
