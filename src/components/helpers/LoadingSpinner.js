import React from "react";
import { RotatingLines } from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="30"
      visible={true}
    />
  );
}

export default LoadingSpinner;
