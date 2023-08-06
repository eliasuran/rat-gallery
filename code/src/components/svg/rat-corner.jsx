import * as React from "react";
const RatCorner = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="101%"
    height="100%"
    fill="#110915"
    stroke="#110915"
    transform="rotate(180)"
    className="bottom-0 right-0 z-10"
    {...props}
  >
    {'{" "}'}
    <path
      d="M.768 512V0h510.464z"
      style={{
        fill: "#110915",
      }}
    />
    {'{" "}'}
    <path d="M138.8 373.552V138.448h234.4z" />
    {'{" "}'}
  </svg>
);
export default RatCorner;
