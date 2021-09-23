import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";

export default function Enneagram() {
  const [page, setPage] = useState(1);

  const clickHandler = () => {
    setPage((prevState) => +prevState + 1);
    console.log(page);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col justfiy-center max-w-screen-2xl items-center text-center space-y-32">
          <div className="max-w-screen-sm space-y-10">
            {page === 1 && (
              <>
                <h1 className="text-4xl font-semibold text-gray-900">
                  นพลักษณ์คืออะไร?
                </h1>
                <p className="text-xl font-medium text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </>
            )}
            {page === 2 && (
              <>
                <h1 className="text-4xl font-semibold text-gray-900">
                  เราเรียนไปเพื่ออะไร?
                </h1>
                <p className="text-xl font-medium text-gray-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </>
            )}
            {page === 3 && (
              <>
                <h1 className="text-4xl font-semibold text-gray-900">
                  รู้จักกับลักษณ์ทั้ง 9
                </h1>
                <div className="relative w-600 h-600 bg-red-50">
                  <div className="cursor-pointer absolute top-1/2 left-1/2"></div>
                </div>
              </>
            )}
            {page === 3 ? (
              <></>
            ) : (
              <>
                <div className="flex flex-grow justify-end">
                  <div
                    className="text-lg cursor-pointer"
                    onClick={() => {
                      clickHandler();
                    }}
                  >
                    <p>อ่านต่อ</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
