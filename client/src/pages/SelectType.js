import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SelectType() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <h1 className="font-semibold text-3xl text-gray-800">มดซ่า</h1>
        <Type route="/" text="Type 1" />
        <Type route="/" text="Type 2" />
        <Type route="/" text="Type 3" />
        <Type route="/" text="Type 4" />
        <Type route="/" text="Type 5" />
        <Type route="/" text="Type 6" />
        <Type route="/" text="Type 7" />
        <Type route="/" text="Type 8" />
        <Type route="/" text="Type 9" />
      </div>
    </motion.div>
  );
}

function Type({ route, text }) {
  return (
    <div>
      <Link to={route} className="hover:underline">
        <p>{text}</p>
      </Link>
    </div>
  );
}
