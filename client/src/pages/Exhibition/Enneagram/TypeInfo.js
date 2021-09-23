import React, { useEffect, useState } from "react";
import axios from "../../../Axios";
import Pusher from "pusher-js";
import { motion, AnimatePresence } from "framer-motion";
// import Blog from "../../../components/Blog";
import { types } from "../../../Static";

export default function TypeInfo() {
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

  // switchable components

  const [type, setType] = useState("Type1");

  console.log(type);

  // navigation component

  function Navigation({ text, switchTo }) {
    return (
      <div
        className="hover:underline cursor-pointer"
        onClick={() => {
          setType(switchTo);
        }}
      >
        <h1>{text}</h1>
      </div>
    );
  }

  // switchable components

  function TypeContent({ title, description, strength, weakness }) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="space-y-3">
          <h1 className="font-semibold text-4xl text-gray-900">{title}</h1>
          <h6 className="font-medium text-2xl text-gray-700">{strength}</h6>
          <h6 className="font-medium text-2xl text-gray-700">{weakness}</h6>
          <p>{description}</p>
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-grow max-w-screen-xl space-x-20">
          <div className="sticky flex w-64 flex-grow flex-col space-y-10">
            <Navigation text={types.type1.title} switchTo={types.type1.type} />
            <Navigation text={types.type2.title} switchTo={types.type2.type} />
            <Navigation text={types.type3.title} switchTo={types.type3.type} />
            <Navigation text={types.type4.title} switchTo={types.type4.type} />
            <Navigation text={types.type5.title} switchTo={types.type5.type} />
            <Navigation text={types.type6.title} switchTo={types.type6.type} />
            <Navigation text={types.type7.title} switchTo={types.type7.type} />
            <Navigation text={types.type8.title} switchTo={types.type8.type} />
            <Navigation text={types.type9.title} switchTo={types.type9.type} />
          </div>
          <div>
            <AnimatePresence exitBeforeEnter>
              <div>
                {type === "Type1" && (
                  <TypeContent
                    title={types.type1.title}
                    description={types.type1.description}
                    strength={types.type1.strength}
                    weakness={types.type1.weakness}
                  />
                )}
                {type === "Type2" && (
                  <TypeContent
                    title={types.type2.title}
                    description={types.type2.description}
                  />
                )}
                {type === "Type3" && (
                  <TypeContent
                    title={types.type3.title}
                    description={types.type3.description}
                  />
                )}
                {type === "Type4" && (
                  <TypeContent
                    title={types.type4.title}
                    description={types.type4.description}
                  />
                )}
                {type === "Type5" && (
                  <TypeContent
                    title={types.type5.title}
                    description={types.type5.description}
                  />
                )}
                {type === "Type6" && (
                  <TypeContent
                    title={types.type6.title}
                    description={types.type6.description}
                  />
                )}
                {type === "Type7" && (
                  <TypeContent
                    title={types.type7.title}
                    description={types.type7.description}
                  />
                )}
                {type === "Type8" && (
                  <TypeContent
                    title={types.type8.title}
                    description={types.type8.description}
                  />
                )}
                {type === "Type9" && (
                  <TypeContent
                    title={types.type9.title}
                    description={types.type9.description}
                  />
                )}
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
