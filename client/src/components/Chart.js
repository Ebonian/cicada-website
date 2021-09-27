import React from "react";
import { Link } from "react-router-dom";

export default function Chart({ route, src, style }) {
  return (
    <Link to={route}>
      <img className={style} src={src} />
    </Link>
  );
}
