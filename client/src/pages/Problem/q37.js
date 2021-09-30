import { motion } from "framer-motion";
import React, { Component } from "react";
import Choices from "../../components/Choices";
import Navigation from "../../components/Navigation";

export default class q37 extends Component {
  render() {
    const { s1 } = this.props.location.state;
    const { s2 } = this.props.location.state;
    const { s3 } = this.props.location.state;
    const { s4 } = this.props.location.state;
    const { s5 } = this.props.location.state;
    const { s6 } = this.props.location.state;
    const { s7 } = this.props.location.state;
    const { s8 } = this.props.location.state;
    const { s9 } = this.props.location.state;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          {s1 && (
            <Choices
              title="ใครทำให้คุณรู้สึกแบบนั้นได้มากที่สุด"
              subtitle=""
              q1="ตัวคุณเอง"
              q2="ผู้อื่น"
              q3=""
              r1="/Problem/q38"
              r2="/Problem/q5"
              r3="/"
              s={s1}
            />
          )}
          {s2 && (
            <Choices
              title="ใครทำให้คุณรู้สึกแบบนั้นได้มากที่สุด"
              subtitle=""
              q1="ตัวคุณเอง"
              q2="ผู้อื่น"
              q3=""
              r1="/Problem/q38"
              r2="/Problem/q5"
              r3="/"
              s={s2}
            />
          )}
          {s3 && (
            <Choices
              title="ใครทำให้คุณรู้สึกแบบนั้นได้มากที่สุด"
              subtitle=""
              q1="ตัวคุณเอง"
              q2="ผู้อื่น"
              q3=""
              r1="/Problem/q38"
              r2="/Problem/q5"
              r3="/"
              s={s3}
            />
          )}
          {s4 && (
            <Choices
              title="ใครทำให้คุณรู้สึกแบบนั้นได้มากที่สุด"
              subtitle=""
              q1="ตัวคุณเอง"
              q2="ผู้อื่น"
              q3=""
              r1="/Problem/q38"
              r2="/Problem/q5"
              r3="/"
              s={s4}
            />
          )}
          {s5 && (
            <Choices
              title="ใครทำให้คุณรู้สึกแบบนั้นได้มากที่สุด"
              subtitle=""
              q1="ตัวคุณเอง"
              q2="ผู้อื่น"
              q3=""
              r1="/Problem/q38"
              r2="/Problem/q5"
              r3="/"
              s={s5}
            />
          )}
          {s6 && (
            <Choices
              title="ใครทำให้คุณรู้สึกแบบนั้นได้มากที่สุด"
              subtitle=""
              q1="ตัวคุณเอง"
              q2="ผู้อื่น"
              q3=""
              r1="/Problem/q38"
              r2="/Problem/q5"
              r3="/"
              s={s6}
            />
          )}
          {s7 && (
            <Choices
              title="ใครทำให้คุณรู้สึกแบบนั้นได้มากที่สุด"
              subtitle=""
              q1="ตัวคุณเอง"
              q2="ผู้อื่น"
              q3=""
              r1="/Problem/q38"
              r2="/Problem/q5"
              r3="/"
              s={s7}
            />
          )}
          {s8 && (
            <Choices
              title="ใครทำให้คุณรู้สึกแบบนั้นได้มากที่สุด"
              subtitle=""
              q1="ตัวคุณเอง"
              q2="ผู้อื่น"
              q3=""
              r1="/Problem/q38"
              r2="/Problem/q5"
              r3="/"
              s={s8}
            />
          )}
          {s9 && (
            <Choices
              title="ใครทำให้คุณรู้สึกแบบนั้นได้มากที่สุด"
              subtitle=""
              q1="ตัวคุณเอง"
              q2="ผู้อื่น"
              q3=""
              r1="/Problem/q38"
              r2="/Problem/q5"
              r3="/"
              s={s9}
            />
          )}
        </div>
      </motion.div>
    );
  }
}
