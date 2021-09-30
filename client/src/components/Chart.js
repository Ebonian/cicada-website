import React from "react";
import { Link } from "react-router-dom";

export default function Chart({ route, src, styling }) {
  return (
    <Link to={route}>
      <img className={styling} src={src} alt="Enneagram Chart" />
    </Link>
  );
}
