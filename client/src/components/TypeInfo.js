import React from "react";
import Slider from "./Slider";
import PeopleCard from "./PeopleCard";

export default function TypeInfo({
  title,
  description,
  strength,
  weakness,
  handle,
  celeb,
}) {
  return (
    <div className="space-y-3">
      <div className="text-center mb-14">
        <h1 className="font-semibold text-4xl text-gray-900">{title}</h1>
      </div>
      <div className="text-center pb-14 text-lg">{description}</div>
      {/* <hr className="h-0.5 border-0 bg-gray-600" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 pb-14">
        <div>
          <h6 className="font-medium text-2xl text-gray-700 pb-4">จุดแข็ง</h6>
          <ul className="pl-5 list-disc text-lg">
            <li>{strength.s1}</li>
            <li>{strength.s2}</li>
            <li>{strength.s3}</li>
            <li>{strength.s4}</li>
            <li>{strength.s5}</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-2xl text-gray-700 pb-4">จุดอ่อน</h6>
          <ul className="pl-5 list-disc text-lg">
            <li>{weakness.w1}</li>
            <li>{weakness.w2}</li>
            <li>{weakness.w3}</li>
            <li>{weakness.w4}</li>
            <li>{weakness.w5}</li>
          </ul>
        </div>
      </div>
      <div className="pb-14">
        <h6 className="font-medium text-2xl text-gray-700 pb-4">
          วิธีรับมือกับเรา
        </h6>
        <ul className="pl-5 list-disc text-lg">
          <li>{handle.h1}</li>
          <li>{handle.h2}</li>
          <li>{handle.h3}</li>
          <li>{handle.h4}</li>
          <li>{handle.h5}</li>
        </ul>
      </div>
      <div className="pb-32">
        <h6 className="font-medium text-2xl text-gray-700 pb-8">
          คนที่คุณอาจรู้จัก
        </h6>
        <Slider>
          <PeopleCard pic={celeb.c1src} name={celeb.c1} />
          <PeopleCard pic={celeb.c2src} name={celeb.c2} />
          <PeopleCard pic={celeb.c3src} name={celeb.c3} />
          <PeopleCard pic={celeb.c4src} name={celeb.c4} />
        </Slider>
      </div>
    </div>
  );
}
