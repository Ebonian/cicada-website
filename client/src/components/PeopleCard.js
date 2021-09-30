import React from "react";

export default function PeopleCard({ pic, name }) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className="flex flex-col justify-center items-center box-border w-40 p-2 select-none bg-transparent hover:bg-gray-100 duration-300 rounded-md"
    >
      <div className="relative mb-5 pointer-events-none">
        <img
          src={pic}
          className="h-40 w-40"
          alt="คนในนพลักษณ์นี้ที่คุณอาจรู้จัก"
        ></img>
      </div>
      <div className="font-regular">{name}</div>
    </div>
  );
}
