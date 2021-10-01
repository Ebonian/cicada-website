import { motion } from "framer-motion";
import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import axios from "../../Axios";
import { Link } from "react-router-dom";

export default function Q50() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const sendContent = async (e) => {
    e.preventDefault();

    await axios.post("contents/new", {
      content: input1,
      name: `Posted by ${input2}`,
    });

    setInput1("");
    setInput2("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      <div className="flex flex-col justify-center items-center h-screen w-full px-5 md:px-0">
        <div className="text-center w-80 md:w-96 font-medium text-lg mb-6">
          <p>
            ขอบคุณที่มาเข้าชม จักจั่นลอกคราบ - Enneagram Online Exhibition
            ของพวกเรา หากมีข้อติ ชม หรือเสนอแนะใด ๆ สามารถพิมพ์ไว้ด้านล่างได้เลย
            พวกเรายินดีที่จะรับฟัง
          </p>
        </div>
        <div>
          <form className="flex flex-col space-y-5">
            <textarea
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="ข้อความ หรือความคิดเห็น"
              type="text"
              className="border-2 w-80 md:w-96 h-40 p-2 outline-none"
            />
            <input
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="ชื่อของท่าน"
              type="text"
              className="border-2 w-80 md:w-96 h-12 p-2 outline-none"
            />
          </form>
          <div className="flex justify-end mt-5">
            <button
              onClick={sendContent}
              type="submit"
              className="py-2 px-4 border-2 text-gray-700 font-medium duration-300 hover:bg-gray-200 hover:text-gray-500"
            >
              <Link to="/Problem/q51">Submit!</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
