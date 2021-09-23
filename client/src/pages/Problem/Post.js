import { motion } from "framer-motion";
import React, { useState } from "react";
import axios from "../../Axios";

export default function Post() {
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
      <div className="flex justify-center items-center h-screen w-full">
        <div>
          <form>
            <input
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Content here!"
              type="text"
            />
            <input
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="Name here!"
              type="text"
            />
          </form>
          <button onClick={sendContent} type="submit">
            Submit!
          </button>
        </div>
      </div>
    </motion.div>
  );
}
