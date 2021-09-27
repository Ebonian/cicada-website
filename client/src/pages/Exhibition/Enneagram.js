import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import { types } from "../../Static";
import { gsap, Power3 } from "gsap";

// import enneagram chart
import one from "../../images/enneagram-chart/SVG/1.svg";
import two from "../../images/enneagram-chart/SVG/2.svg";
import three from "../../images/enneagram-chart/SVG/3.svg";
import four from "../../images/enneagram-chart/SVG/4.svg";
import five from "../../images/enneagram-chart/SVG/5.svg";
import six from "../../images/enneagram-chart/SVG/6.svg";
import seven from "../../images/enneagram-chart/SVG/7.svg";
import eight from "../../images/enneagram-chart/SVG/8.svg";
import nine from "../../images/enneagram-chart/SVG/9.svg";
import mainLine from "../../images/enneagram-chart/SVG/lines.svg";

export default function Enneagram() {
  // gsap animation
  let popupItem = useRef(null);

  // component function

  const [type, setType] = useState("");
  // console.log(type);

  function Popup(props) {
    return (
      <div
        className="fixed flex justify-center items-center z-50 bg-black bg-opacity-10 h-screen w-full top-0 left-0"
        onClick={() => {
          setType("");
        }}
      >
        <div className="relative p-10 bg-white max-w-screen-md w-full">
          {props.children}
          <h1 className="text-3xl font-semibold"></h1>
        </div>
      </div>
    );
  }

  function PopupBody({ title, description, strength, weakness, handle }) {
    return (
      <div className="space-y-3">
        <h1 className="font-semibold text-4xl text-gray-900">{title}</h1>
        <hr className="h-0.5 border-0 bg-gray-600" />
        <div className="grid grid-flow-col gap-4">
          <div className="col-span-auto">
            <h6 className="font-medium text-2xl text-gray-700">จุดแข็ง 💪</h6>
            <ul className="list-disc list-inside">
              <li>{strength.s1}</li>
              <li>{strength.s2}</li>
              <li>{strength.s3}</li>
              <li>{strength.s4}</li>
              <li>{strength.s5}</li>
            </ul>
          </div>
          <div className="col-span-auto">
            <h6 className="font-medium text-2xl text-gray-700">จุดอ่อน 🐔</h6>
            <ul className="list-disc list-inside">
              <li>{weakness.w1}</li>
              <li>{weakness.w2}</li>
              <li>{weakness.w3}</li>
              <li>{weakness.w4}</li>
              <li>{weakness.w5}</li>
            </ul>
          </div>
        </div>
        {description}
        <h6 className="font-medium text-2xl text-gray-700">
          วิธีรับมือกับเรา 🙏
        </h6>
        <ul className="list-disc list-inside">
          <li>{handle.h1}</li>
          <li>{handle.h2}</li>
          <li>{handle.h3}</li>
          <li>{handle.h4}</li>
          <li>{handle.h5}</li>
        </ul>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {type === "type1" && (
        <Popup>
          <PopupBody
            title={types.type1.title}
            description={types.type1.description}
            strength={types.type1.strength}
            weakness={types.type1.weakness}
            handle={types.type1.handle}
          />
        </Popup>
      )}
      {type === "type2" && (
        <Popup>
          <PopupBody
            title={types.type2.title}
            description={types.type2.description}
            strength={types.type2.strength}
            weakness={types.type2.weakness}
            handle={types.type2.handle}
          />
        </Popup>
      )}
      {type === "type3" && (
        <Popup>
          <PopupBody
            title={types.type3.title}
            description={types.type3.description}
            strength={types.type3.strength}
            weakness={types.type3.weakness}
            handle={types.type3.handle}
          />
        </Popup>
      )}
      {type === "type4" && (
        <Popup>
          <PopupBody
            title={types.type4.title}
            description={types.type4.description}
            strength={types.type4.strength}
            weakness={types.type4.weakness}
            handle={types.type4.handle}
          />
        </Popup>
      )}
      {type === "type5" && (
        <Popup>
          <PopupBody
            title={types.type5.title}
            description={types.type5.description}
            strength={types.type5.strength}
            weakness={types.type5.weakness}
            handle={types.type5.handle}
          />
        </Popup>
      )}
      {type === "type6" && (
        <Popup>
          <PopupBody
            title={types.type6.title}
            description={types.type6.description}
            strength={types.type6.strength}
            weakness={types.type6.weakness}
            handle={types.type6.handle}
          />
        </Popup>
      )}
      {type === "type7" && (
        <Popup>
          <PopupBody
            title={types.type7.title}
            description={types.type7.description}
            strength={types.type7.strength}
            weakness={types.type7.weakness}
            handle={types.type7.handle}
          />
        </Popup>
      )}
      {type === "type8" && (
        <Popup>
          <PopupBody
            title={types.type8.title}
            description={types.type8.description}
            strength={types.type8.strength}
            weakness={types.type8.weakness}
            handle={types.type8.handle}
          />
        </Popup>
      )}
      {type === "type9" && (
        <Popup>
          <PopupBody
            title={types.type9.title}
            description={types.type9.description}
            strength={types.type9.strength}
            weakness={types.type9.weakness}
            handle={types.type9.handle}
          />
        </Popup>
      )}
      <Navigation route="/Exhibition" />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col justfiy-center max-w-screen-2xl items-center text-center space-y-32">
          <div className="max-w-screen-sm space-y-10">
            <h1 className="text-4xl font-semibold text-gray-900">
              รู้จักกับลักษณ์ทั้ง 9
            </h1>
            <div className="relative w-600 h-600">
              <img
                className="absolute w-20 h-20 right-24 top-16 cursor-pointer"
                src={one}
                onClick={() => {
                  setType("type1");
                  // popupAnim();
                }}
              />
              <img
                className="absolute w-20 h-20 right-0 top-1/2 -mt-20 cursor-pointer"
                src={two}
                onClick={() => {
                  setType("type2");
                }}
              />
              <img
                className="absolute w-20 h-20 bottom-32 right-8 cursor-pointer"
                src={three}
                onClick={() => {
                  setType("type3");
                }}
              />
              <img
                className="absolute w-20 h-20 bottom-5 right-40 cursor-pointer"
                src={four}
                onClick={() => {
                  setType("type4");
                }}
              />
              <img
                className="absolute w-20 h-20 bottom-5 left-40 cursor-pointer"
                src={five}
                onClick={() => {
                  setType("type5");
                }}
              />
              <img
                className="absolute w-20 h-20 bottom-32 left-8 cursor-pointer"
                src={six}
                onClick={() => {
                  setType("type6");
                }}
              />
              <img
                className="absolute w-20 h-20 left-0 top-1/2 -mt-20 cursor-pointer"
                src={seven}
                onClick={() => {
                  setType("type7");
                }}
              />
              <img
                className="absolute w-20 h-20 left-24 top-16 cursor-pointer"
                src={eight}
                onClick={() => {
                  setType("type8");
                }}
              />
              <img
                className="absolute left-1/2 -ml-10 w-20 h-20 cursor-pointer"
                src={nine}
                onClick={() => {
                  setType("type9");
                }}
              />

              <div className="p-8">
                <img src={mainLine} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
