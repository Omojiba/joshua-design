import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimCursor() {
  return (
    <>
      <AnimatedCursor
        innerSize={13}
        outerSize={18}
        color="255,107,107"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "#menu-icon",
          "#download",
        ]}
      />
    </>
  );
}

export default AnimCursor;
