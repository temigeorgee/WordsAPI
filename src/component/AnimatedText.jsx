const AnimatedText = ({ text }) => {
  return (
    <div className="animated-container  text-6xl xs sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl ">
      {[...text].map((value) => (
        <div className="animated-container_text" key={Math.random() * 10}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
