import { motion } from "framer-motion";
import React, { Component } from "react";
// import Choices from "../../components/Choices";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";

export default class q34 extends Component {
  render() {
    const { s } = this.props.location.state;
    // console.log(s);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation route="/Exhibition" noanim />
        <div className="flex justify-center items-center h-screen w-full">
          {s === "ลักษณ์ 1" && (
            <Input
              title={`คุณคิดว่าความเครียด / หงุดหงิดของ${s} เป็นอุปสรรคอย่างไร`}
              subtitle=""
              q1=""
              q2="ต่อไป"
              q3=""
              r1=""
              r2="/Problem/q47"
              r3=""
              s1=""
              s2=""
              s3=""
            />
          )}
          {s === "ลักษณ์ 2" && (
            <Input
              title={`คุณคิดว่าความความกังวลของ${s} เป็นอุปสรรคอย่างไร`}
              subtitle=""
              q1=""
              q2="ต่อไป"
              q3=""
              r1=""
              r2="/Problem/q47"
              r3=""
              s1=""
              s2=""
              s3=""
            />
          )}
          {s === "ลักษณ์ 3" && (
            <Input
              title={`คุณคิดว่าการทำงานของ${s} เป็นอุปสรรคอย่างไร`}
              subtitle=""
              q1=""
              q2="ต่อไป"
              q3=""
              r1=""
              r2="/Problem/q47"
              r3=""
              s1=""
              s2=""
              s3=""
            />
          )}
          {s === "ลักษณ์ 4" && (
            <Input
              title={`คุณคิดว่าความเศร้าของ${s} เป็นอุปสรรคอย่างไร`}
              subtitle=""
              q1=""
              q2="ต่อไป"
              q3=""
              r1=""
              r2="/Problem/q47"
              r3=""
              s1=""
              s2=""
              s3=""
            />
          )}
          {s === "ลักษณ์ 5" && (
            <Input
              title={`คุณคิดว่าความโลภ / คิดมากของ${s} เป็นอุปสรรคอย่างไร`}
              subtitle=""
              q1=""
              q2="ต่อไป"
              q3=""
              r1=""
              r2="/Problem/q47"
              r3=""
              s1=""
              s2=""
              s3=""
            />
          )}
          {s === "ลักษณ์ 6" && (
            <Input
              title={`คุณคิดว่าความกังวลของ${s} เป็นอุปสรรคอย่างไร`}
              subtitle=""
              q1=""
              q2="ต่อไป"
              q3=""
              r1=""
              r2="/Problem/q47"
              r3=""
              s1=""
              s2=""
              s3=""
            />
          )}
          {s === "ลักษณ์ 7" && (
            <Input
              title={`คุณคิดว่าความตะกละของ${s} เป็นอุปสรรคอย่างไร`}
              subtitle=""
              q1=""
              q2="ต่อไป"
              q3=""
              r1=""
              r2="/Problem/q47"
              r3=""
              s1=""
              s2=""
              s3=""
            />
          )}
          {s === "ลักษณ์ 8" && (
            <Input
              title={`คุณคิดว่าอารมณ์ของ${s} เป็นอุปสรรคอย่างไร`}
              subtitle=""
              q1=""
              q2="ต่อไป"
              q3=""
              r1=""
              r2="/Problem/q47"
              r3=""
              s1=""
              s2=""
              s3=""
            />
          )}
          {s === "ลักษณ์ 9" && (
            <Input
              title={`คุณคิดว่าความขี้เกียจของ${s} เป็นอุปสรรคอย่างไร`}
              subtitle=""
              q1=""
              q2="ต่อไป"
              q3=""
              r1=""
              r2="/Problem/q47"
              r3=""
              s1=""
              s2=""
              s3=""
            />
          )}
        </div>
      </motion.div>
    );
  }
}
