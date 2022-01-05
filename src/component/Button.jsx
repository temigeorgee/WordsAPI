import React from "react";

const STYLES = [
  "btn--primary--solid",
  "btn--yellow--solid",
  "btn--primary--outline",
  "btn--yellow--outline",
];

const SIZES = ["btn--large", "btn--medium", "btn--small"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn mx-auto flex items-center justify-center ${checkButtonStyle} ${checkButtonSize} ${
        checkButtonStyle === "btn--primary--solid"
          ? "transition duration-300 ease-in-out  animate-bounce"
          : ""
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
