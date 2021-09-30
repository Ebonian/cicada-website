import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import Navigation from "../../../components/Navigation";
import { types } from "../../../Static";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Type3() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 1.2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 3, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
      .to(secondItem, 1, { delay: 3.5, opacity: 0, display: "none" })
      .from(thirdItem, 1, { delay: 0.3, opacity: 0, display: "none" });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <Navigation route="/Exhibition/Analysis" noanim /> */}
      <div className="flex flex-col justify-center items-center h-screen w-full">
        {/* first item */}
        <div
          className="text-center text-2xl font-medium text-gray-700 space-y-6"
          ref={(el) => {
            firstItem = el;
          }}
        >
          <h1>ยินดีด้วย</h1>
          <h1 className="text-5xl text-gray-900">คุณคือลักษณ์ 3!</h1>
        </div>

        {/* second item */}
        <div
          className="text-center text-2xl font-medium text-gray-900 space-y-6"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1>นักแสดงหรือ The Performer คือลักษณ์ที่สามของนพลักษณ์</h1>
        </div>

        {/* third item */}
        <div
          className="flex flex-col justify-center items-center text-center max-w-screen-sm text-2xl font-medium text-gray-800 space-y-6"
          ref={(el) => {
            thirdItem = el;
          }}
        >
          <h1>{types.type3.description}</h1>
          <div className="flex duration-300 items-center text-xl space-x-2 text-gray-800 hover:text-gray-500">
            <Link to="/Exhibition/Enneagram/Perfectionist">อ่านต่อ</Link>
            <FiArrowRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
