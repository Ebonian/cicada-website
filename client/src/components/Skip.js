import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap";

export default function Skip({ route }) {
  let navItem = useRef(null);

  useEffect(() => {
    gsap.to(navItem, 4, {
      delay: 10,
      opacity: 1,
      x: -20,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div
      className="absolute top-16 right-4 sm:top-20 sm:right-8 2xl:top-20 2xl:right-40 opacity-0 text-gray-400 duration-300"
      ref={(el) => {
        navItem = el;
      }}
    >
      <Link to={route}>
        <div className="flex text-xl items-center space-x-3">
          <p>Skip</p>
        </div>
      </Link>
    </div>
  );
}
