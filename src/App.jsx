import { useState } from "react";
import Home from "./components/Home";
import Second from "./components/Second";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const locomotiveScroll = new LocomotiveScroll();

  useGSAP(() => {
    gsap.to(".main", {
      x: "-400%",
      scrollTrigger: {
        pin: true,
        // left: "100vh",
        scroller: "body",
        trigger: ".main",
        scrub: true,
      },
    });
  });

  return (
    <>
      <div className="main max-h-[500%]  flex">
        <Home />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
      </div>
    </>
  );
}

export default App;
