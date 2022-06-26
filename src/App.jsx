import Flow from "./components/Flow";
import { lastIndexOf, substr } from "@7urtle/lambda";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./Routes";
import "./App.css";
import React from "react";
import AuthWrapper from "./wrappers/AuthWrapper";

// *
// * @HindleyMilner getBasename :: string -> string
// *
// * @pure
// * @param {string} path URL path, probably window.location.pathname
// * @returns {string} final basename
// *
// * @example
// * getBaseName('/some/structure/page'); // => '/some/structure'
// */
const getBasename = (path) => substr(lastIndexOf("/")(path))(0)(path);

/**
 * Base Template component holding the basic web application
 * @returns {JSX.Element}
 */

export default function App() {
  return (
    <div className="app-cont">
      <AuthWrapper>
        <Flow activeNumber={2} totalNumber={3} />
        <Router basename={getBasename(window.location.pathname)}>
          <MyRoutes />
        </Router>
      </AuthWrapper>
    </div>
  );
}
