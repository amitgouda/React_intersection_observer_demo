import React from "react";
import useObserver from "../IntersectionObserverHook";
function Lists() {
  const [isVisible, domRef] = useObserver({
    params: {
      root: null, // document.querySelector("#root"),
      rootMargin: "0px",
      threshold: 0.01,
    },
  });

  return (
    <div style={{ backgroundColor: isVisible ? "yellowgreen" : "cyan" }}>
      <div style={{ position: "fixed", width: "100%" }}>{`Salmon div is ${
        isVisible ? "" : " Not "
      } visible`}</div>
      {COLORS.map((color) => (
        <div
          id={color}
          style={{ backgroundColor: color, width: 200, height: 200 }}
          ref={color === "salmon" ? domRef : null}
        >
          <span>{color}</span>
        </div>
      ))}
    </div>
  );
}

export default Lists;

const COLORS = [
  "pink",
  "yellow",
  "green",
  "brown",
  "blue",
  "violet",
  "red",
  "orange",
  "grey",
  "purple",
  "black",
  "salmon",
];
