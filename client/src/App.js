import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import music from "../src/audio/Touching_Moment.mp3";

// import page
import Home from "./pages/";
import Test from "./Test";
import Exhibition from "./pages/Exhibition.js";
import Problem from "./pages/Problem";
import Enneagram from "./pages/Exhibition/Enneagram";
import Stereotype from "./pages/Exhibition/Stereotype";
import TypeInfo from "./pages/Exhibition/Enneagram/TypeInfo";
import NotFound from "./pages/404";
import Post from "./pages/Exhibition/Problem/Post";
import SelectType from "./pages/Exhibition/Problem/SelectType";
import Feedback from "./pages/Exhibition/Problem/Feedback";
import Type2 from "./pages/Exhibition/Problem/Type2";
import Analysis from "./pages/Exhibition/Analysis";

//import question
import q1 from "./pages/Problem/q1";
import q2 from "./pages/Problem/q2";
import q3 from "./pages/Problem/q3";
import q4 from "./pages/Problem/q4";
import q5 from "./pages/Problem/q5";
import q6 from "./pages/Problem/q6";
import q7 from "./pages/Problem/q7";
import q8 from "./pages/Problem/q8";

function App() {
  const location = useLocation();

  // bgm function
  const bgm = new Audio(music);
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
  useEffect(() => {
    bgm.play();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        // page route
        <Route path="/" component={Home} exact />
        <Route path="/Test" component={Test} exact />
        <Route path="/Exhibition" component={Exhibition} exact />
        <Route path="/Problem" component={Problem} exact />
        {/* <Route path="/Problem/Post" component={Post} exact />
        <Route path="/Problem/SelectType" component={SelectType} exact />
        <Route path="/Problem/Feedback" component={Feedback} exact />
        <Route path="/Problem/Type2" component={Type2} exact /> */}
        <Route path="/Exhibition/Enneagram" component={Enneagram} exact />
        <Route path="/Exhibition/Stereotype" component={Stereotype} exact />
        <Route path="/Exhibition/Analysis" component={Analysis} exact />
        <Route
          path="/Exhibition/Enneagram/TypeInfo"
          component={TypeInfo}
          exact
        />
        <Route path="/Problem/q1" component={q1} exact />
        <Route path="/Problem/q2" component={q2} exact />
        <Route path="/Problem/q3" component={q3} exact />
        <Route path="/Problem/q4" component={q4} exact />
        <Route path="/Problem/q5" component={q5} exact />
        <Route path="/Problem/q6" component={q6} exact />
        <Route path="/Problem/q7" component={q7} exact />
        <Route path="/Problem/q8" component={q8} exact />
        // 404 catch all routes
        <Route path="*" component={NotFound} exact />
        // question route
      </Switch>
    </AnimatePresence>
  );
}

export default App;
