import { motion } from "framer-motion";
import { gsap, Power3 } from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import { cardDesc } from "../../Static";

export default function Analysis() {
  let title = useRef(null);
  let subtitle = useRef(null);
  let main = useRef(null);

  let popupA = useRef(null);
  let popupB = useRef(null);
  let popupC = useRef(null);
  let popupD = useRef(null);
  let popupE = useRef(null);
  let popupF = useRef(null);
  let popupG = useRef(null);
  let popupH = useRef(null);
  let popupI = useRef(null);

  useEffect(() => {
    gsap.from(title, 2, {
      delay: 0.5,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.from(subtitle, 2, {
      delay: 0.7,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
  }, []);

  const popupEnterA = () => {
    gsap.to(popupA, 0.8, {
      opacity: 1,
      y: -20,
      display: "flex",
    });
    gsap.to(title, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
  };
  const popupExitA = () => {
    gsap.to(popupA, 0.7, {
      opacity: 0,
      y: 20,
      display: "none",
    });
    gsap.to(title, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
  };
  const popupEnterB = () => {
    gsap.to(popupB, 0.8, {
      opacity: 1,
      y: -20,
      display: "flex",
    });
    gsap.to(title, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
  };
  const popupExitB = () => {
    gsap.to(popupB, 0.7, {
      opacity: 0,
      y: 20,
      display: "none",
    });
    gsap.to(title, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
  };
  const popupEnterC = () => {
    gsap.to(popupC, 0.8, {
      opacity: 1,
      y: -20,
      display: "flex",
    });
    gsap.to(title, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
  };
  const popupExitC = () => {
    gsap.to(popupC, 0.7, {
      opacity: 0,
      y: 20,
      display: "none",
    });
    gsap.to(title, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
  };
  const popupEnterD = () => {
    gsap.to(popupD, 0.8, {
      opacity: 1,
      y: -20,
      display: "flex",
    });
    gsap.to(title, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
  };
  const popupExitD = () => {
    gsap.to(popupD, 0.7, {
      opacity: 0,
      y: 20,
      display: "none",
    });
    gsap.to(title, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
  };
  const popupEnterE = () => {
    gsap.to(popupE, 0.8, {
      opacity: 1,
      y: -20,
      display: "flex",
    });
    gsap.to(title, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
  };
  const popupExitE = () => {
    gsap.to(popupE, 0.7, {
      opacity: 0,
      y: 20,
      display: "none",
    });
    gsap.to(title, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
  };
  const popupEnterF = () => {
    gsap.to(popupF, 0.8, {
      opacity: 1,
      y: -20,
      display: "flex",
    });
    gsap.to(title, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
  };
  const popupExitF = () => {
    gsap.to(popupF, 0.7, {
      opacity: 0,
      y: 20,
      display: "none",
    });
    gsap.to(title, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
  };
  const popupEnterG = () => {
    gsap.to(popupG, 0.8, {
      opacity: 1,
      y: -20,
      display: "flex",
    });
    gsap.to(title, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
  };
  const popupExitG = () => {
    gsap.to(popupG, 0.7, {
      opacity: 0,
      y: 20,
      display: "none",
    });
    gsap.to(title, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
  };
  const popupEnterH = () => {
    gsap.to(popupH, 0.8, {
      opacity: 1,
      y: -20,
      display: "flex",
    });
    gsap.to(title, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
  };
  const popupExitH = () => {
    gsap.to(popupH, 0.7, {
      opacity: 0,
      y: 20,
      display: "none",
    });
    gsap.to(title, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
  };
  const popupEnterI = () => {
    gsap.to(popupI, 0.8, {
      opacity: 1,
      y: -20,
      display: "flex",
    });
    gsap.to(title, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut,
    });
  };
  const popupExitI = () => {
    gsap.to(popupI, 0.7, {
      opacity: 0,
      y: 20,
      display: "none",
    });
    gsap.to(title, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(subtitle, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
    gsap.to(main, 1, {
      opacity: 1,
      y: 20,
      ease: Power3.easeOut,
    });
  };

  function Popup({ A, B, C, D, E, F, G, H, I }) {
    return (
      <div className="flex flex-col space-y-8 text-xl font-medium text-gray-800 max-w-screen-sm pt-20 sm:pt-0">
        {A && (
          <>
            <h1 className="text-gray-500 font-semibold text-4xl italic">
              Card A
            </h1>
            <p>{cardDesc.cardA[0]}</p>
            <p>{cardDesc.cardA[1]}</p>
            <p>{cardDesc.cardA[2]}</p>
            <p>{cardDesc.cardA[3]}</p>
            <p>{cardDesc.cardA[4]}</p>
            <p>{cardDesc.cardA[5]}</p>
            <p>{cardDesc.cardA[6]}</p>
            <p>{cardDesc.cardA[7]}</p>
            <p>{cardDesc.cardA[8]}</p>
            <p>{cardDesc.cardA[9]}</p>
            <p>{cardDesc.cardA[10]}</p>
          </>
        )}
        {B && (
          <>
            <h1 className="text-gray-500 font-semibold text-4xl italic">
              Card B
            </h1>
            <p>{cardDesc.cardB[0]}</p>
            <p>{cardDesc.cardB[1]}</p>
            <p>{cardDesc.cardB[2]}</p>
            <p>{cardDesc.cardB[3]}</p>
            <p>{cardDesc.cardB[4]}</p>
            <p>{cardDesc.cardB[5]}</p>
            <p>{cardDesc.cardB[6]}</p>
            <p>{cardDesc.cardB[7]}</p>
            <p>{cardDesc.cardB[8]}</p>
            <p>{cardDesc.cardB[9]}</p>
          </>
        )}
        {C && (
          <>
            <h1 className="text-gray-500 font-semibold text-4xl italic">
              Card C
            </h1>
            <p>{cardDesc.cardC[0]}</p>
            <p>{cardDesc.cardC[1]}</p>
            <p>{cardDesc.cardC[2]}</p>
            <p>{cardDesc.cardC[3]}</p>
            <p>{cardDesc.cardC[4]}</p>
            <p>{cardDesc.cardC[5]}</p>
            <p>{cardDesc.cardC[6]}</p>
            <p>{cardDesc.cardC[7]}</p>
            <p>{cardDesc.cardC[8]}</p>
            <p>{cardDesc.cardC[9]}</p>
          </>
        )}
        {D && (
          <>
            <h1 className="text-gray-500 font-semibold text-4xl italic">
              Card D
            </h1>
            <p>{cardDesc.cardD[0]}</p>
            <p>{cardDesc.cardD[1]}</p>
            <p>{cardDesc.cardD[2]}</p>
            <p>{cardDesc.cardD[3]}</p>
            <p>{cardDesc.cardD[4]}</p>
            <p>{cardDesc.cardD[5]}</p>
            <p>{cardDesc.cardD[6]}</p>
            <p>{cardDesc.cardD[7]}</p>
            <p>{cardDesc.cardD[8]}</p>
          </>
        )}
        {E && (
          <>
            <h1 className="text-gray-500 font-semibold text-4xl italic">
              Card E
            </h1>
            <p>{cardDesc.cardE[0]}</p>
            <p>{cardDesc.cardE[1]}</p>
            <p>{cardDesc.cardE[2]}</p>
            <p>{cardDesc.cardE[3]}</p>
            <p>{cardDesc.cardE[4]}</p>
            <p>{cardDesc.cardE[5]}</p>
            <p>{cardDesc.cardE[6]}</p>
            <p>{cardDesc.cardE[7]}</p>
            <p>{cardDesc.cardE[8]}</p>
          </>
        )}
        {F && (
          <>
            <h1 className="text-gray-500 font-semibold text-4xl italic">
              Card F
            </h1>
            <p>{cardDesc.cardF[0]}</p>
            <p>{cardDesc.cardF[1]}</p>
            <p>{cardDesc.cardF[2]}</p>
            <p>{cardDesc.cardF[3]}</p>
            <p>{cardDesc.cardF[4]}</p>
          </>
        )}
        {G && (
          <>
            <h1 className="text-gray-500 font-semibold text-4xl italic">
              Card G
            </h1>
            <p>{cardDesc.cardG[0]}</p>
            <p>{cardDesc.cardG[1]}</p>
            <p>{cardDesc.cardG[2]}</p>
            <p>{cardDesc.cardG[3]}</p>
            <p>{cardDesc.cardG[4]}</p>
            <p>{cardDesc.cardG[5]}</p>
            <p>{cardDesc.cardG[6]}</p>
            <p>{cardDesc.cardG[7]}</p>
            <p>{cardDesc.cardG[8]}</p>
          </>
        )}
        {H && (
          <>
            <h1 className="text-gray-500 font-semibold text-4xl italic">
              Card H
            </h1>
            <p>{cardDesc.cardH[0]}</p>
            <p>{cardDesc.cardH[1]}</p>
            <p>{cardDesc.cardH[2]}</p>
            <p>{cardDesc.cardH[3]}</p>
            <p>{cardDesc.cardH[4]}</p>
            <p>{cardDesc.cardH[5]}</p>
            <p>{cardDesc.cardH[6]}</p>
            <p>{cardDesc.cardH[7]}</p>
            <p>{cardDesc.cardH[8]}</p>
          </>
        )}
        {I && (
          <>
            <h1 className="text-gray-500 font-semibold text-4xl italic">
              Card I
            </h1>
            <p>{cardDesc.cardH[0]}</p>
            <p>{cardDesc.cardH[1]}</p>
            <p>{cardDesc.cardH[2]}</p>
            <p>{cardDesc.cardH[3]}</p>
            <p>{cardDesc.cardH[4]}</p>
            <p>{cardDesc.cardH[5]}</p>
            <p>{cardDesc.cardH[6]}</p>
            <p>{cardDesc.cardH[7]}</p>
            <p>{cardDesc.cardH[8]}</p>
          </>
        )}

        <div className="flex flex-grow justify-center md:justify-end items-center space-x-16 text-lg text-gray-700 pt-10 md:pt-0 pb-20 md:pb-0">
          {A && (
            <>
              <p
                className="cursor-pointer duration-300 hover:text-gray-500"
                onClick={() => {
                  popupExitA();
                }}
              >
                ไม่อะ นี่ไม่ใช่ฉันเลย
              </p>
              <Link to="/Exhibition/Analysis/Type8">
                <p className="cursor-pointer duration-300 hover:text-gray-500">
                  อันนี้แหละ ใช่เลย!
                </p>
              </Link>
            </>
          )}
          {B && (
            <>
              <p
                className="cursor-pointer duration-300 hover:text-gray-500"
                onClick={() => {
                  popupExitB();
                }}
              >
                ไม่อะ นี่ไม่ใช่ฉันเลย
              </p>
              <Link to="/Exhibition/Analysis/Type1">
                <p className="cursor-pointer duration-300 hover:text-gray-500">
                  อันนี้แหละ ใช่เลย!
                </p>
              </Link>
            </>
          )}
          {C && (
            <>
              <p
                className="cursor-pointer duration-300 hover:text-gray-500"
                onClick={() => {
                  popupExitC();
                }}
              >
                ไม่อะ นี่ไม่ใช่ฉันเลย
              </p>
              <Link to="/Exhibition/Analysis/Type9">
                <p className="cursor-pointer duration-300 hover:text-gray-500">
                  อันนี้แหละ ใช่เลย!
                </p>
              </Link>
            </>
          )}
          {D && (
            <>
              <p
                className="cursor-pointer duration-300 hover:text-gray-500"
                onClick={() => {
                  popupExitD();
                }}
              >
                ไม่อะ นี่ไม่ใช่ฉันเลย
              </p>
              <Link to="/Exhibition/Analysis/Type2">
                <p className="cursor-pointer duration-300 hover:text-gray-500">
                  อันนี้แหละ ใช่เลย!
                </p>
              </Link>
            </>
          )}
          {E && (
            <>
              <p
                className="cursor-pointer duration-300 hover:text-gray-500"
                onClick={() => {
                  popupExitE();
                }}
              >
                ไม่อะ นี่ไม่ใช่ฉันเลย
              </p>
              <Link to="/Exhibition/Analysis/Type3">
                <p className="cursor-pointer duration-300 hover:text-gray-500">
                  อันนี้แหละ ใช่เลย!
                </p>
              </Link>
            </>
          )}
          {F && (
            <>
              <p
                className="cursor-pointer duration-300 hover:text-gray-500"
                onClick={() => {
                  popupExitF();
                }}
              >
                ไม่อะ นี่ไม่ใช่ฉันเลย
              </p>
              <Link to="/Exhibition/Analysis/Type5">
                <p className="cursor-pointer duration-300 hover:text-gray-500">
                  อันนี้แหละ ใช่เลย!
                </p>
              </Link>
            </>
          )}
          {G && (
            <>
              <p
                className="cursor-pointer duration-300 hover:text-gray-500"
                onClick={() => {
                  popupExitG();
                }}
              >
                ไม่อะ นี่ไม่ใช่ฉันเลย
              </p>
              <Link to="/Exhibition/Analysis/Type6">
                <p className="cursor-pointer duration-300 hover:text-gray-500">
                  อันนี้แหละ ใช่เลย!
                </p>
              </Link>
            </>
          )}
          {H && (
            <>
              <p
                className="cursor-pointer duration-300 hover:text-gray-500"
                onClick={() => {
                  popupExitH();
                }}
              >
                ไม่อะ นี่ไม่ใช่ฉันเลย
              </p>
              <Link to="/Exhibition/Analysis/Type7">
                <p className="cursor-pointer duration-300 hover:text-gray-500">
                  อันนี้แหละ ใช่เลย!
                </p>
              </Link>
            </>
          )}
          {I && (
            <>
              <p
                className="cursor-pointer duration-300 hover:text-gray-500"
                onClick={() => {
                  popupExitI();
                }}
              >
                ไม่อะ นี่ไม่ใช่ฉันเลย
              </p>
              <Link to="/Exhibition/Analysis/Type4">
                <p className="cursor-pointer duration-300 hover:text-gray-500">
                  อันนี้แหละ ใช่เลย!
                </p>
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }

  // main component
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col justify-center items-center h-auto mt-20 md:mt-0 md:h-screen w-full space-y-16 md:space-y-4">
        <Navigation route="/Exhibition" />
        <div
          className="absolute md:fixed px-5 md:px-5 h-screen w-full z-50 justify-center md:items-center bg-white opacity-0 hidden"
          ref={(el) => {
            popupA = el;
          }}
        >
          <Popup A />
        </div>
        <div
          className="absolute md:fixed px-5 md:px-0 h-screen w-full z-50 justify-center md:items-center bg-white opacity-0 hidden"
          ref={(el) => {
            popupB = el;
          }}
        >
          <Popup B />
        </div>
        <div
          className="absolute md:fixed px-5 md:px-0 h-screen w-full z-50 justify-center md:items-center bg-white opacity-0 hidden"
          ref={(el) => {
            popupC = el;
          }}
        >
          <Popup C />
        </div>
        <div
          className="absolute md:fixed px-5 md:px-0 h-screen w-full z-50 justify-center md:items-center bg-white opacity-0 hidden"
          ref={(el) => {
            popupD = el;
          }}
        >
          <Popup D />
        </div>
        <div
          className="absolute md:fixed px-5 md:px-0 h-screen w-full z-50 justify-center md:items-center bg-white opacity-0 hidden"
          ref={(el) => {
            popupE = el;
          }}
        >
          <Popup E />
        </div>
        <div
          className="absolute md:fixed px-5 md:px-0 h-screen w-full z-50 justify-center md:items-center bg-white opacity-0 hidden"
          ref={(el) => {
            popupF = el;
          }}
        >
          <Popup F />
        </div>
        <div
          className="absolute md:fixed px-5 md:px-0 h-screen w-full z-50 justify-center md:items-center bg-white opacity-0 hidden"
          ref={(el) => {
            popupG = el;
          }}
        >
          <Popup G />
        </div>
        <div
          className="absolute md:fixed px-5 md:px-0 h-screen w-full z-50 justify-center md:items-center bg-white opacity-0 hidden"
          ref={(el) => {
            popupH = el;
          }}
        >
          <Popup H />
        </div>
        <div
          className="absolute md:fixed px-5 md:px-0 h-screen w-full z-50 justify-center md:items-center bg-white opacity-0 hidden"
          ref={(el) => {
            popupI = el;
          }}
        >
          <Popup I />
        </div>
        <div className="text-center space-y-5">
          <h1
            className="text-gray-900 font-semibold text-5xl"
            ref={(el) => {
              title = el;
            }}
          >
            แบบทดสอบกี่กี๊
          </h1>
          <p
            className="text-gray-600 text-lg"
            ref={(el) => {
              subtitle = el;
            }}
          >
            เลือกการ์ดที่เมื่อเปิดอ่านแล้วรู้สึกว่าตรงกับตัวเรามากที่สุด
          </p>
        </div>
        <div
          className="grid grid-cols-3 font-semibold italic text-card hover:text-cardhover select-none text-gray-300 sm:mr-20 gap-10 duration-300"
          ref={(el) => {
            main = el;
          }}
        >
          <div
            onClick={() => {
              popupEnterA();
            }}
          >
            <Card letter="A" delay="0.8" />
          </div>
          <div
            onClick={() => {
              popupEnterB();
            }}
          >
            <Card letter="B" delay="1" />
          </div>
          <div
            onClick={() => {
              popupEnterC();
            }}
          >
            <Card letter="C" delay="1.2" />
          </div>
          <div
            onClick={() => {
              popupEnterD();
            }}
          >
            <Card letter="D" delay="1.4" />
          </div>
          <div
            onClick={() => {
              popupEnterE();
            }}
          >
            <Card letter="E" delay="1.6" />
          </div>
          <div
            onClick={() => {
              popupEnterF();
            }}
          >
            <Card letter="F" delay="1.8" />
          </div>
          <div
            onClick={() => {
              popupEnterG();
            }}
          >
            <Card letter="G" delay="2" />
          </div>
          <div
            onClick={() => {
              popupEnterH();
            }}
          >
            <Card letter="H" delay="2.2" />
          </div>
          <div
            onClick={() => {
              popupEnterI();
            }}
          >
            <Card letter="I" delay="2.4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Card Component
function Card({ letter, delay }) {
  let card = useRef(null);
  useEffect(() => {
    gsap.to(card, 2, {
      delay: delay,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div
      className="cursor-pointer relative overflow-hidden w-20 h-20 sm:w-40 sm:h-40 hover:w-44 hover:h-44 hover:text-gray-600 duration-300 opacity-0"
      ref={(el) => {
        card = el;
      }}
    >
      <div className="absolute -bottom-16 -right-2">
        <h1>{letter}</h1>
      </div>
    </div>
  );
}
