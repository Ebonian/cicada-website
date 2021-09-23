import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="grid h-screen w-full place-content-center text-center">
        <h1 className="text-3xl font-semibold">404 Not Found!</h1>
        <br />
        <Link to="/" className="text-lg font-medium hover:underline">
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
}
