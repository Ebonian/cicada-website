import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Navigation from "../../components/Navigation";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Q60(props) {
  const { s } = props.location.state;
  // console.log(s);

  function CustomInput() {
    const [input, setInput] = useState("");

    return (
      <div className="flex flex-col justify-center items-center text-center space-y-8">
        <div className="w-96 px-5 md:px-0">
          <h1 className="font-medium text-2xl text-gray-800 leading-loose">
            ถ้าคนรู้จักของคุณกำลังเผชิญปัญหาเดียวกัน คุณจะแนะนำเขาว่าอย่างไร?
          </h1>
        </div>
        <div className="flex flex-col space-y-6">
          <form>
            <textarea
              name="message"
              rows="10"
              cols="30"
              className="border-2 w-72 h-28 p-1 outline-none"
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
          <>
            {input === "" ? (
              <></>
            ) : (
              <Link
                to={{
                  pathname: "/Problem/q61",
                  state: {
                    s: { input },
                  },
                }}
              >
                <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400 ml-4">
                  ต่อไป
                  <FiArrowRight />
                </div>
              </Link>
            )}
          </>
        </div>
      </div>
    );
  }

  function Bigbrain({ Text, Duration }) {
    let firstItem = useRef(null);
    let secondItem = useRef(null);
    let thirdItem = useRef(null);
    const Delay = Number(Duration);
    console.log(Delay);

    useEffect(() => {
      gsap
        .timeline()
        .from(firstItem, 2, { delay: 1, opacity: 0 })
        .to(firstItem, 1, { delay: Delay, opacity: 0, display: "none" })
        .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" })
        .to(secondItem, 1, { delay: 8, opacity: 0, display: "none" })
        .from(thirdItem, 1, { delay: 0.3, opacity: 0, display: "none" });
    }, []);
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            firstItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            {Text}
          </h1>
        </div>
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            secondItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            ตอนนี้
            เราอยากให้คุณลองนึกถึงความคิดที่ทำให้คุณรู้สึกแย่บ่อยหรือมากที่สุด
          </h1>
        </div>
        <div
          ref={(el) => {
            thirdItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <CustomInput />
        </div>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      {s === "ลักษณ์ 1" ? <Bigbrain Text={Quote[0]} Duration="16" /> : <></>}
      {s === "ลักษณ์ 2" ? <Bigbrain Text={Quote[1]} Duration="16" /> : <></>}
      {s === "ลักษณ์ 3" ? <Bigbrain Text={Quote[2]} Duration="19" /> : <></>}
      {s === "ลักษณ์ 4" ? <Bigbrain Text={Quote[3]} Duration="22" /> : <></>}
      {s === "ลักษณ์ 5" ? <Bigbrain Text={Quote[4]} Duration="17" /> : <></>}
      {s === "ลักษณ์ 6" ? <Bigbrain Text={Quote[5]} Duration="18" /> : <></>}
      {s === "ลักษณ์ 7" ? <Bigbrain Text={Quote[6]} Duration="18" /> : <></>}
      {s === "ลักษณ์ 8" ? <Bigbrain Text={Quote[7]} Duration="18" /> : <></>}
      {s === "ลักษณ์ 9" ? <Bigbrain Text={Quote[8]} Duration="22" /> : <></>}
    </motion.div>
  );
}

const Quote = [
  "บางครั้ง การปล่อยให้หลาย ๆ อย่างมันเป็นไปตามแบบของมัน ก็ทำให้เราทุกข์น้อยกว่า เมื่อเราไม่ยึดติด ตัวเราก็จะเบาลง เราจะเห็นโลกในมุมที่ไม่เคยเห็นมากขึ้น",

  "บางครั้งสิ่งที่สำคัญที่สุดก็คือการดูแลจิตใจตนเอง ถ้าหากจิตใจเราอ่อนแอ เราก็ไม่สามารถที่จะให้อะไรกับผู้อื่นได้ เป็นการให้ที่ไม่สมบูรณ์ เพราะความคิดคนเรานั้นส่งผลต่อความรู้สึกโดยตรง",

  "บางอย่างนั้นก็หนักเกินกว่าที่จะแบกไว้ตลอดเวลา ถ้าเรารู้ว่ามันเป็นภาระก็ควรพิจารณาที่จะวาง เพราะคนเราไม่สามารถทำให้ทุกคนชอบได้ ไม่ว่าจะเป็นใครก็ตาม ความจริงนั้นมันก็ยากแหละ แต่ว่าทุกคนก็เป็นเหมือนกัน ฉะนั้นอย่าเก็บเรื่องเหล่านั้นมาเอาเป็นเรื่องทุกข์ร้อนเลย",

  "หากคุณคิดว่าไม่มีใครเข้าใจคุณเลย แม้กระทั่งตัวคุณเอง ต่อให้โลกนี้เหมือนทอดทิ้งคุณไว้ข้างหลัง และตัวคุณเองก็ไม่มีแรงที่จะก้าวข้ามผ่านสิ่งต่าง ๆ ไปข้างหน้า  แต่เราอยากให้คุณลองถอยออกมาดูสิ่งเหล่านั้นจากมุมที่ไกลขึ้น มองตัวเองจากมุมของคนอื่น คุณจะมองเห็นโลกนี้ได้ตามความเป็นจริงมากขึ้น อย่าปล่อยให้ความคิดมาทำให้คุณรู้สึกท่วมท้นได้",

  "ความคิดคุณกำลังยึดติดว่าโลกภายนอกนั้นคุกคามมากเกินไป นี่อาจจะเป็นการแนะนำที่ค่อนข้างแทงใจดำ แต่ว่าโลกไม่ได้เรียกร้องมากอย่างที่คุณคิด เราแค่มีระดับพลังงานที่ต่างกัน คุณแค่จำเป็นจำต้องหาจุดสมดุลระหว่างคุณเองกับสิ่งที่คุณคิดว่าไม่อยากยุ่งด้วย",

  "จริง ๆ แล้วความสำเร็จเล็ก ๆ น้อย ๆ อยู่รอบ ๆ ตัวเราในทุก ๆ วัน มันอาจจะไม่ยิ่งใหญ่จนประทับใจ แต่ก็สามารถสังเกตเห็นได้ คุณมักจะมองข้ามเรื่องดี ๆ เหล่านี้แล้วให้ความสำคัญกับสิ่งแย่ ๆ ที่ยังไม่เกิดขึ้นด้วยซ้ำ คุณอาจจะอยากให้โอกาสตัวคุณเองได้เติบโต และที่สำคัญคือได้มีความสุขกับสิ่งที่คุณได้ทำ",

  "จริงอยู่ที่โลกนี้ต่างมีกฎเกณฑ์มากมายที่เราต้องทำตาม แต่การคิดว่าทั้งหมดนั้นเป็นการตีกรอบเราตลอดเวลาก็เป็นความคิดที่เหนื่อยเหมือนกัน บางทีคุณน่าจะลองมองว่าบางอย่างก็เป็นเครื่องมือที่ช่วยเปิดโอกาสหลาย ๆ อย่างให้กับคุณ สิ่งหนึ่งสามารถมองได้หลายแง่มุม ไม่จำกัดอยู่แค่สิ่งที่เราคิด",

  "การมีความคิดเป็นของตัวเองนั้นก็เป็นเรื่องที่ดี แต่จะดีกว่ามากถ้าหากคุณสามารถยอมรับความยืดหยุ่นได้ ยอมรับว่าบางคนก็สามารถอ่อนแอได้ แม้แต่ตัวคุณเอง การฝืนความจริงมีแต่จะทำให้คุณรู้สึกเหนื่อยและแย่กับตัวเอง การปล่อยวางก็เป็นวิธีที่ใช้ได้เสมอ",

  "สิ่งหนึ่งทุกคนต้องเจอเป็นประจำก็คือความกดดันจากคนรอบข้าง เพราะเราต่างต้องใช้ชีวิตอยู่ในบรรทัดฐานของสังคมเดียวกัน คุณอาจจะมีความคิดโทษตัวเองที่จะจัดการเรื่องต่าง ๆ ไม่ได้ดี แต่อยากให้คุณรู้ว่า ความคิดแย่ ๆ ที่เรามอบให้ตัวเอง ที่เรายอมเก็บไว้ข้างในใจนั้น ไม่ได้ช่วยให้อะไรที่ขึ้น มีแต่จะทำให้แย่ลง เราอยากให้คุณอยู่กับปัจจุบันมากขึ้น ถามตัวเองบ่อย ๆ ว่าตอนนี้เราทำอะไรอยู่",
];
