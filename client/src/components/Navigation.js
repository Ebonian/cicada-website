import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { gsap, Power3 } from "gsap";

export default function Navigation({ route, noanim }) {
  let navItem = useRef(null);

  useEffect(() => {
    if (noanim) {
    } else {
      gsap.to(navItem, 2, {
        delay: 2,
        opacity: 1,
        x: 20,
        ease: Power3.easeOut,
      });
    }
  }, []);

  if (noanim) {
    return (
      <div
        className="absolute top-16 left-2 sm:top-20 sm:left-5 2xl:top-20 2xl:left-32 text-gray-900 hover:text-gray-600 duration-300"
        ref={(el) => {
          navItem = el;
        }}
      >
        <Link to={route}>
          <div className="flex text-xl items-center space-x-3">
            <FiArrowLeft />
            <p>กลับ</p>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className="absolute top-16 left-2 sm:top-20 sm:left-5 2xl:top-20 2xl:left-32 opacity-0 text-gray-900 hover:text-gray-600 duration-300"
        ref={(el) => {
          navItem = el;
        }}
      >
        <Link to={route}>
          <div className="flex text-xl items-center space-x-3">
            <FiArrowLeft />
            <p>กลับ</p>
          </div>
        </Link>
      </div>
    );
  }
}
