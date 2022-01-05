import React from "react";
import AnimatedText from "../component/AnimatedText";
import LeftWrapper from "../container/LeftWrapper";
import RightWrapper from "../container/RightWrapper";

const HomePage = () => {
  return (
    <div className="home-container">
      <LeftWrapper />
      <RightWrapper />
      <AnimatedText text="Dictionary" />
    </div>
  );
};

export default HomePage;
