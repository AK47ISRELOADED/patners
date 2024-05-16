import { useState } from "react";
import Home from "./components/Home";
import Second from "./components/Second";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".main", {
      x: "-100%",
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
      <div className="main min-h-[200%]  flex  ">
        <Home />
        <Second />
      </div>
    </>
  );
}

export default App;
