import { motion } from "framer-motion";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";

export default function Q6() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 1.4, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 3, opacity: 0, display: "none" })
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
            งั้นก็... ดีใจที่ได้ยินอย่างนั้นนะ
          </p>
        </div>
        <div
          className="flex duration-300 items-center text-xl space-x-2 text-gray-800 hover:text-gray-500"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <Link to="/Exhibition">กลับไปชมนิทรรศการต่อกันเถอะ</Link>
          <FiArrowRight />
        </div>
      </div>
    </motion.div>
  );
}
