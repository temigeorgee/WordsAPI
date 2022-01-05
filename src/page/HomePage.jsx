import { useState } from "react";
import AnimatedText from "../component/AnimatedText";
import LeftWrapper from "../container/LeftWrapper";
import RightWrapper from "../container/RightWrapper";

const HomePage = () => {
  const [switcher, setSwitcher] = useState(false);
  return (
    <div className="home-container">
      <LeftWrapper setSwitcher={setSwitcher} switcher={switcher} />
      <RightWrapper setSwitcher={setSwitcher} switcher={switcher} />
      <AnimatedText text="Word Search" />
    </div>
  );
};

export default HomePage;
