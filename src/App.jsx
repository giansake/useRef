import { useState } from "react";
import RefComponent from "./components/RefComponent";
import useResizeObserver from "use-resize-observer";
import "./App.css";

function App() {
  const { ref, width } = useResizeObserver();
  const [coordinates, setCoordinates] = useState(0);

  return (
    <main ref={ref}>
      <RefComponent width={width} setCoordinates={setCoordinates} />
      <div
        className="floating-navbar"
        style={{
          top: coordinates,
        }}
      >
        i float around
      </div>
    </main>
  );
}

export default App;
