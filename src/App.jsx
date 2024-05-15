import { useState } from "react";
import Home from "./components/Home";
import Second from "./components/Second";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[99.9vh] min-w-full flex overflow-y-hidden">
        <Home />
        <Second />
      </div>
    </>
  );
}

export default App;
