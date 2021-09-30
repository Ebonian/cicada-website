import React from "react";

export default function Slider({ children }) {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4">{children}</div>
  );
}
