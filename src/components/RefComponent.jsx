import { useRef, useEffect } from "react";

const RefComponent = ({ width }) => {
  const componentRef = useRef(null);

  useEffect(() => {
    console.log(componentRef.current.getBoundingClientRect().width);
  }, [width]);

  return (
    <div ref={componentRef} className="ref-component-container">
      <span>ref component</span>
      <span>ref component</span>
      <span>ref component</span>
      <span>ref component</span>
      <span>ref component</span>
    </div>
  );
};

export default RefComponent;
