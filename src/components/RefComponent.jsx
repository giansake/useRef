import { useRef, useEffect } from "react";

const RefComponent = ({ width, setCoordinates }) => {
  const componentRef = useRef(null);

  useEffect(() => {
    setCoordinates(componentRef.current.getBoundingClientRect().bottom);
  }, [width, setCoordinates]);

  return (
    <div ref={componentRef}>
      <div className="ref-component-container">
        <span>ref component</span>
        <span>ref component</span>
        <span>ref component</span>
        <span>ref component</span>
        <span>ref component</span>
      </div>
    </div>
  );
};

export default RefComponent;
