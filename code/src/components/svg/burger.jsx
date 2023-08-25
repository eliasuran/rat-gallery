import * as React from "react";
const BurgerSVG = (props) => (
  <svg
    className="xs:hidden block cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="#f6f1f9" strokeLinecap="round" strokeWidth={1.5}>
      <path d="M4 7h3m13 0h-9M20 17h-3M4 17h9M4 12h16" />
    </g>
  </svg>
);
export default BurgerSVG;
