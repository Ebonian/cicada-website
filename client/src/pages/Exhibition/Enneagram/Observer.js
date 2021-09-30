import { motion } from "framer-motion";
import React from "react";
import Navigation from "../../../components/Navigation";
import TypeInfo from "../../../components/TypeInfo";
import { types } from "../../../Static";

export default function Observer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition/Enneagram" noanim />
      <div className="flex justify-center items-center h-auto w-full">
        <div className="flex max-w-screen-lg px-10 xl:px-0 justify-center items-center pt-40">
          <TypeInfo
            title={types.type5.title}
            description={types.type5.description}
            strength={types.type5.strength}
            weakness={types.type5.weakness}
            handle={types.type5.handle}
            celeb={types.type5.celeb}
          />
        </div>
      </div>
    </motion.div>
  );
}
