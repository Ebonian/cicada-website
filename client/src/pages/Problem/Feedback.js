import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import axios from "../../Axios";
import Pusher from "pusher-js";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      <div className="flex flex-col justify-center items-center h-auto w-full mt-32">
        {contents.map((content) => (
          <div className="pt-10">
            <p className="text-gray-800 text-lg">{content.content}</p>
            <p className="text-gray-600 text-mg">{content.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
