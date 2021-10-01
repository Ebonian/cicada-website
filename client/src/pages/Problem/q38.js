import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q38 extends Component {
  render() {
    const { s } = this.props.location.state;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          {s === "ลักษณ์ 1" && (
            <Choices
              title="แล้วมันเกิดจาก?"
              subtitle=""
              q1="ความรู้สึก"
              q2="ความคิด"
              q3=""
              r1="/Problem/q39"
              r2="/Problem/q60"
              r3="/"
              s={s}
            />
          )}
          {s === "ลักษณ์ 2" && (
            <Choices
              title="แล้วมันเกิดจาก?"
              subtitle=""
              q1="ความรู้สึก"
              q2="ความคิด"
              q3=""
              r1="/Problem/q52"
              r2="/Problem/q60"
              r3="/"
              s={s}
            />
          )}
          {s === "ลักษณ์ 3" && (
            <Choices
              title="แล้วมันเกิดจาก?"
              subtitle=""
              q1="ความรู้สึก"
              q2="ความคิด"
              q3=""
              r1="/Problem/q52"
              r2="/Problem/q60"
              r3="/"
              s={s}
            />
          )}
          {s === "ลักษณ์ 4" && (
            <Choices
              title="แล้วมันเกิดจาก?"
              subtitle=""
              q1="ความรู้สึก"
              q2="ความคิด"
              q3=""
              r1="/Problem/q53"
              r2="/Problem/q60"
              r3="/"
              s={s}
            />
          )}
          {s === "ลักษณ์ 5" && (
            <Choices
              title="แล้วมันเกิดจาก?"
              subtitle=""
              q1="ความรู้สึก"
              q2="ความคิด"
              q3=""
              r1="/Problem/q54"
              r2="/Problem/q60"
              r3="/"
              s={s}
            />
          )}
          {s === "ลักษณ์ 6" && (
            <Choices
              title="แล้วมันเกิดจาก?"
              subtitle=""
              q1="ความรู้สึก"
              q2="ความคิด"
              q3=""
              r1="/Problem/q55"
              r2="/Problem/q60"
              r3="/"
              s={s}
            />
          )}
          {s === "ลักษณ์ 7" && (
            <Choices
              title="แล้วมันเกิดจาก?"
              subtitle=""
              q1="ความรู้สึก"
              q2="ความคิด"
              q3=""
              r1="/Problem/q55"
              r2="/Problem/q60"
              r3="/"
              s={s}
            />
          )}
          {s === "ลักษณ์ 8" && (
            <Choices
              title="แล้วมันเกิดจาก?"
              subtitle=""
              q1="ความรู้สึก"
              q2="ความคิด"
              q3=""
              r1="/Problem/q56"
              r2="/Problem/q60"
              r3="/"
              s={s}
            />
          )}
          {s === "ลักษณ์ 9" && (
            <Choices
              title="แล้วมันเกิดจาก?"
              subtitle=""
              q1="ความรู้สึก"
              q2="ความคิด"
              q3=""
              r1="/Problem/q57"
              r2="/Problem/q60"
              r3="/"
              s={s}
            />
          )}
        </div>
      </motion.div>
    );
  }
}
