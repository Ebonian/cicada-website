import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactAudioPlayer from "react-audio-player";

import music from "../src/audio/Touching_Moment.mp3";
// import silence from "../src/audio/silence.mp3";

// import page
import Home from "./pages/";
import Test from "./Test";
import Exhibition from "./pages/Exhibition.js";
import Problem from "./pages/Problem";
import Enneagram from "./pages/Exhibition/Enneagram";
import Stereotype from "./pages/Exhibition/Stereotype";
import NotFound from "./pages/404";
import Analysis from "./pages/Exhibition/Analysis";

//import types
import Perfectionist from "./pages/Exhibition/Enneagram/Perfectionist";
import Giver from "./pages/Exhibition/Enneagram/Giver";
import Performer from "./pages/Exhibition/Enneagram/Performer";
import Individualist from "./pages/Exhibition/Enneagram/Individualist";
import Observer from "./pages/Exhibition/Enneagram/Observer";
import Questioner from "./pages/Exhibition/Enneagram/Questioner";
import Enthusiast from "./pages/Exhibition/Enneagram/Enthusiast";
import Boss from "./pages/Exhibition/Enneagram/Boss";
import Peacemaker from "./pages/Exhibition/Enneagram/Peacemaker";

import Type1 from "./pages/Exhibition/Analysis/Type1";
import Type2 from "./pages/Exhibition/Analysis/Type2";
import Type3 from "./pages/Exhibition/Analysis/Type3";
import Type4 from "./pages/Exhibition/Analysis/Type4";
import Type5 from "./pages/Exhibition/Analysis/Type5";
import Type6 from "./pages/Exhibition/Analysis/Type6";
import Type7 from "./pages/Exhibition/Analysis/Type7";
import Type8 from "./pages/Exhibition/Analysis/Type8";
import Type9 from "./pages/Exhibition/Analysis/Type9";

//import question
import Feedback from "./pages/Problem/Feedback";
import q1 from "./pages/Problem/q1";
import q2 from "./pages/Problem/q2";
import q3 from "./pages/Problem/q3";
import q4 from "./pages/Problem/q4";
import q5 from "./pages/Problem/q5";
import q6 from "./pages/Problem/q6";
import q7 from "./pages/Problem/q7";
import q8 from "./pages/Problem/q8";
import q9 from "./pages/Problem/q9";
import q10 from "./pages/Problem/q10";
import q11 from "./pages/Problem/q11";
import q12 from "./pages/Problem/q12";
import q13 from "./pages/Problem/q13";
import q14 from "./pages/Problem/q14";
import q15 from "./pages/Problem/q15";
import q16 from "./pages/Problem/q16";
import q17 from "./pages/Problem/q17";
import q18 from "./pages/Problem/q18";
import q19 from "./pages/Problem/q19";
import q20 from "./pages/Problem/q20";
import q21 from "./pages/Problem/q21";
import q22 from "./pages/Problem/q22";
import q23 from "./pages/Problem/q23";
import q24 from "./pages/Problem/q24";
import q25 from "./pages/Problem/q25";
import q26 from "./pages/Problem/q26";
import q27 from "./pages/Problem/q27";
import q28 from "./pages/Problem/q28";
import q29 from "./pages/Problem/q29";
import q30 from "./pages/Problem/q30";
import q31 from "./pages/Problem/q31";
import q32 from "./pages/Problem/q32";
import q33 from "./pages/Problem/q33";
import q34 from "./pages/Problem/q34";
import q35 from "./pages/Problem/q35";
import q36 from "./pages/Problem/q36";
import q37 from "./pages/Problem/q37";
import q38 from "./pages/Problem/q38";
import q39 from "./pages/Problem/q39";
import q40 from "./pages/Problem/q40";
import q41 from "./pages/Problem/q41";
import q42 from "./pages/Problem/q42";
import q43 from "./pages/Problem/q43";
import q44 from "./pages/Problem/q44";
import q45 from "./pages/Problem/q45";
import q46 from "./pages/Problem/q46";
import q47 from "./pages/Problem/q47";
import q48 from "./pages/Problem/q48";
import q49 from "./pages/Problem/q49";
import q50 from "./pages/Problem/q50";
import q51 from "./pages/Problem/q51";
import q52 from "./pages/Problem/q52";
import q53 from "./pages/Problem/q53";
import q54 from "./pages/Problem/q54";
import q55 from "./pages/Problem/q55";
import q56 from "./pages/Problem/q56";
import q57 from "./pages/Problem/q57";
import q58 from "./pages/Problem/q58";
import q59 from "./pages/Problem/q59";
import q60 from "./pages/Problem/q60";
import q61 from "./pages/Problem/q61";
import q62 from "./pages/Problem/q62";
import q63 from "./pages/Problem/q63";
import q64 from "./pages/Problem/q64";
import q65 from "./pages/Problem/q65";
import q66 from "./pages/Problem/q66";
import q67 from "./pages/Problem/q67";
import q68 from "./pages/Problem/q68";
import q69 from "./pages/Problem/q69";
import q70 from "./pages/Problem/q70";
import q71 from "./pages/Problem/q71";
import q72 from "./pages/Problem/q72";
import q73 from "./pages/Problem/q73";
import q74 from "./pages/Problem/q74";
import q75 from "./pages/Problem/q75";
import q76 from "./pages/Problem/q76";
import q77 from "./pages/Problem/q77";
import q78 from "./pages/Problem/q78";
import q79 from "./pages/Problem/q79";
import q888 from "./pages/Problem/q888";
import q999 from "./pages/Problem/q999";

  // bgm function
  export const bgm = new Audio(music);
  bgm.volume = 0.2;
  if (typeof bgm.loop == "boolean") {
    bgm.loop = true;
  } else {
    bgm.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
  }


function App() {
  const location = useLocation();


  // useEffect(() => {
  //   bgm.play();
  // }, []);

  // if (Music()) {
  //   bgm.play();
  // }

  // const vol = 0.4;
  // console.log(Music());

  return (
    <>
      {/* <ReactAudioPlayer
        src={music}
        autoPlay
        loop
        volume={vol}
        preload="auto"
        onCanPlayThrough={() => {
          console.log("Audio is ready.");
        }}
        id="audio"
      /> */}

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {/* page route */}
          <Route path="/" component={Home} exact />
          <Route path="/Test" component={Test} exact />
          <Route path="/Exhibition" component={Exhibition} exact />
          <Route path="/Problem" component={Problem} exact />
          <Route path="/Exhibition/Enneagram" component={Enneagram} exact />
          <Route path="/Exhibition/Stereotype" component={Stereotype} exact />
          <Route path="/Exhibition/Analysis" component={Analysis} exact />
          {/* types */}
          <Route
            path="/Exhibition/Enneagram/Perfectionist"
            component={Perfectionist}
            exact
          />
          <Route path="/Exhibition/Enneagram/Giver" component={Giver} exact />
          <Route
            path="/Exhibition/Enneagram/Performer"
            component={Performer}
            exact
          />
          <Route
            path="/Exhibition/Enneagram/Individualist"
            component={Individualist}
            exact
          />
          <Route
            path="/Exhibition/Enneagram/Observer"
            component={Observer}
            exact
          />
          <Route
            path="/Exhibition/Enneagram/Questioner"
            component={Questioner}
            exact
          />
          <Route
            path="/Exhibition/Enneagram/Enthusiast"
            component={Enthusiast}
            exact
          />
          <Route path="/Exhibition/Enneagram/Boss" component={Boss} exact />
          <Route
            path="/Exhibition/Enneagram/Peacemaker"
            component={Peacemaker}
            exact
          />

          <Route path="/Exhibition/Analysis/Type1" component={Type1} exact />
          <Route path="/Exhibition/Analysis/Type2" component={Type2} exact />
          <Route path="/Exhibition/Analysis/Type3" component={Type3} exact />
          <Route path="/Exhibition/Analysis/Type4" component={Type4} exact />
          <Route path="/Exhibition/Analysis/Type5" component={Type5} exact />
          <Route path="/Exhibition/Analysis/Type6" component={Type6} exact />
          <Route path="/Exhibition/Analysis/Type7" component={Type7} exact />
          <Route path="/Exhibition/Analysis/Type8" component={Type8} exact />
          <Route path="/Exhibition/Analysis/Type9" component={Type9} exact />

          {/* problem */}
          <Route path="/Problem/Feedback" component={Feedback} exact />
          <Route path="/Problem/q1" component={q1} exact />
          <Route path="/Problem/q2" component={q2} exact />
          <Route path="/Problem/q3" component={q3} exact />
          <Route path="/Problem/q4" component={q4} exact />
          <Route path="/Problem/q5" component={q5} exact />
          <Route path="/Problem/q6" component={q6} exact />
          <Route path="/Problem/q7" component={q7} exact />
          <Route path="/Problem/q8" component={q8} exact />
          <Route path="/Problem/q9" component={q9} exact />
          <Route path="/Problem/q10" component={q10} exact />
          <Route path="/Problem/q11" component={q11} exact />
          <Route path="/Problem/q12" component={q12} exact />
          <Route path="/Problem/q13" component={q13} exact />
          <Route path="/Problem/q14" component={q14} exact />
          <Route path="/Problem/q15" component={q15} exact />
          <Route path="/Problem/q16" component={q16} exact />
          <Route path="/Problem/q17" component={q17} exact />
          <Route path="/Problem/q18" component={q18} exact />
          <Route path="/Problem/q19" component={q19} exact />
          <Route path="/Problem/q20" component={q20} exact />
          <Route path="/Problem/q21" component={q21} exact />
          <Route path="/Problem/q22" component={q22} exact />
          <Route path="/Problem/q23" component={q23} exact />
          <Route path="/Problem/q24" component={q24} exact />
          <Route path="/Problem/q25" component={q25} exact />
          <Route path="/Problem/q26" component={q26} exact />
          <Route path="/Problem/q27" component={q27} exact />
          <Route path="/Problem/q28" component={q28} exact />
          <Route path="/Problem/q29" component={q29} exact />
          <Route path="/Problem/q30" component={q30} exact />
          <Route path="/Problem/q31" component={q31} exact />
          <Route path="/Problem/q32" component={q32} exact />
          <Route path="/Problem/q33" component={q33} exact />
          <Route path="/Problem/q34" component={q34} exact />
          <Route path="/Problem/q35" component={q35} exact />
          <Route path="/Problem/q36" component={q36} exact />
          <Route path="/Problem/q37" component={q37} exact />
          <Route path="/Problem/q38" component={q38} exact />
          <Route path="/Problem/q39" component={q39} exact />
          <Route path="/Problem/q40" component={q40} exact />
          <Route path="/Problem/q41" component={q41} exact />
          <Route path="/Problem/q42" component={q42} exact />
          <Route path="/Problem/q43" component={q43} exact />
          <Route path="/Problem/q44" component={q44} exact />
          <Route path="/Problem/q45" component={q45} exact />
          <Route path="/Problem/q46" component={q46} exact />
          <Route path="/Problem/q47" component={q47} exact />
          <Route path="/Problem/q48" component={q48} exact />
          <Route path="/Problem/q49" component={q49} exact />
          <Route path="/Problem/q50" component={q50} exact />
          <Route path="/Problem/q51" component={q51} exact />
          <Route path="/Problem/q52" component={q52} exact />
          <Route path="/Problem/q53" component={q53} exact />
          <Route path="/Problem/q54" component={q54} exact />
          <Route path="/Problem/q55" component={q55} exact />
          <Route path="/Problem/q56" component={q56} exact />
          <Route path="/Problem/q57" component={q57} exact />
          <Route path="/Problem/q58" component={q58} exact />
          <Route path="/Problem/q59" component={q59} exact />
          <Route path="/Problem/q60" component={q60} exact />
          <Route path="/Problem/q61" component={q61} exact />
          <Route path="/Problem/q62" component={q62} exact />
          <Route path="/Problem/q63" component={q63} exact />
          <Route path="/Problem/q64" component={q64} exact />
          <Route path="/Problem/q65" component={q65} exact />
          <Route path="/Problem/q66" component={q66} exact />
          <Route path="/Problem/q67" component={q67} exact />
          <Route path="/Problem/q68" component={q68} exact />
          <Route path="/Problem/q69" component={q69} exact />
          <Route path="/Problem/q70" component={q70} exact />
          <Route path="/Problem/q71" component={q71} exact />
          <Route path="/Problem/q72" component={q72} exact />
          <Route path="/Problem/q73" component={q73} exact />
          <Route path="/Problem/q74" component={q74} exact />
          <Route path="/Problem/q75" component={q75} exact />
          <Route path="/Problem/q76" component={q76} exact />
          <Route path="/Problem/q77" component={q77} exact />
          <Route path="/Problem/q78" component={q78} exact />
          <Route path="/Problem/q79" component={q79} exact />
          <Route path="/Problem/q888" component={q888} exact />
          <Route path="/Problem/q999" component={q999} exact />
          {/* 404 catch all routes */}
          <Route path="*" component={NotFound} exact />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
