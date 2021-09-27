import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "../../../components/Navigation";
import axios from "../../../Axios";
import Pusher from "pusher-js";
import { types } from "../../../Static";
import { gsap, Power3 } from "gsap";

export default function Feedback() {
  // api get req
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios.get("contents/sync").then((response) => {
      // console.log(response.data);
      setContents(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("a1d6960ce79732d6b02f", {
      cluster: "ap1",
    });

    const channel = pusher.subscribe("contents");
    channel.bind("inserted", (newContent) => {
      // alert(JSON.stringify(newContent));
      setContents([...contents, newContent]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [contents]);

  // console.log(contents);
  return (
    <div>
      {contents.map((content) => (
        <div className="pt-10">
          <p className="text-gray-800 text-lg">{content.content}</p>
          <p className="text-gray-600 text-mg">{content.name}</p>
        </div>
      ))}
    </div>
  );
}
