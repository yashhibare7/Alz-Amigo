import React from "react";

import "../public/css/bootstrap.css";

import Videos from "./home/Videos";
import Section from "./home/Section";
import Project from "./home/Project";

export default function Home() {
  return (
    <React.Fragment>
      <main>
        <div className="container-fluid">
          <Videos />
          <Section />
          <Project/>
        </div>
      </main>
    </React.Fragment>
  );
}
