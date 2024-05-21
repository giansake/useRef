import "./App.css";
import RefComponent from "./components/RefComponent";
import useResizeObserver from "use-resize-observer";

function App() {
  const { ref, width } = useResizeObserver();

  return (
    <div ref={ref}>
      <RefComponent width={width} />
      <div className="floating-navbar">i float around</div>
    </div>
  );
}

export default App;
