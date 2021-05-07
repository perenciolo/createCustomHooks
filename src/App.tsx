import "./styles.css";
import React, { useState } from "react";
import useRefOnce from "./hooks/useRefOnce";

export default function App() {
  const [click, setClick] = useState(NaN);
  const fieldRef = useRefOnce(click, setClick);
  return (
    <div className="field" ref={fieldRef}>
      Topo
      {new Array(50).fill(`A`).map((el, i) => (
        <div
          key={i}
          onClick={() => {
            setClick(49);
          }}
        >
          {i}
        </div>
      ))}
    </div>
  );
}
