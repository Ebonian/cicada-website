import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { gsap, Power3 } from "gsap";

export default function Navigation({ route }) {
  let navItem = useRef(null);

  useEffect(() => {
    gsap.to(navItem, 1.2, {
      delay: 2,
      opacity: 1,
      x: 20,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div
      className="absolute top-16 left-0 sm:top-20 sm:left-5 2xl:top-20 2xl:left-32 opacity-0 text-gray-900"
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
