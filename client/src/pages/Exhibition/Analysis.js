import { motion } from "framer-motion";
import React from "react";
import Navigation from "../../components/Navigation";

export default function Analysis() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col justify-center items-center h-auto sm:h-screen w-full space-y-8">
        <Navigation route="/Exhibition" />
        <div className="text-center space-y-5">
          <h1 className="text-red-600 font-black text-6xl">จงเลือก!!!😡🤬</h1>
          <p>เลือกการ์ดที่เมื่อเปิดอ่านแล้วรู้สึกว่าตรงกับตัวเรามากที่สุด</p>
        </div>
        <div className="grid grid-col-1 sm:grid-cols-3 font-semibold italic text-card hover:text-cardhover select-none text-gray-300 mr-20 gap-10 duration-300">
          <Card letter="A" />
          <Card letter="B" />
          <Card letter="C" />
          <Card letter="D" />
          <Card letter="E" />
          <Card letter="F" />
          <Card letter="G" />
          <Card letter="H" />
          <Card letter="I" />
        </div>
      </div>
    </motion.div>
  );
}

function Card({ letter }) {
  return (
    <div
      className={`cursor-pointer relative overflow-hidden w-40 h-40 hover:w-44 hover:h-44 hover:text-white duration-300 hover:bg-gray-800`}
    >
      <div className="absolute -bottom-16 -right-2">
        <h1>{letter}</h1>
      </div>
    </div>
  );
}
