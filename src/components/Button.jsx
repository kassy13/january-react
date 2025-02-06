import React from "react";
import propTypes from "prop-types";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaAirbnb } from "react-icons/fa";

const Button = ({ text, styles, istrue }) => {
  return (
    <button className={styles}>
      {text} {istrue} <RiAccountCircleFill /> <FaAirbnb />
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string,
  styles: propTypes.string,
  istrue: propTypes.bool,
};
export default Button;

// import React from "react";

// const Button = (prop) => {
//   return <button className={prop.styles}>{prop.text}</button>;
// };

// export default Button;
