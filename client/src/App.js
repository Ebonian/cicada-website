import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// import page
import Home from "./pages/";
import Exhibition from "./pages/Exhibition.js";
import Enneagram from "./pages/Exhibition/Enneagram";
import TypeInfo from "./pages/Exhibition/Enneagram/TypeInfo";
import SelectType from "./pages/SelectType";
import NotFound from "./pages/404";
import Post from "./pages/Problem/Post";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        // page route
        <Route path="/" component={Home} exact />
        <Route path="/Exhibition" component={Exhibition} exact />
        <Route path="/Problem/Post" component={Post} exact />
        <Route path="/Exhibition/Enneagram" component={Enneagram} exact />
        <Route path="/SelectType" component={SelectType} exact />
        <Route
          path="/Exhibition/Enneagram/TypeInfo"
          component={TypeInfo}
          exact
        />
        // 404 catch all routes
        <Route path="*" component={NotFound} exact />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
