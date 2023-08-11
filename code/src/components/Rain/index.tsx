import RainDrop from "./raindrops";

const RainContainer = () => {
  return (
    <div className="absolute h-full w-full inset-0 overflow-hidden">
      <RainDrop />
    </div>
  );
};

export default RainContainer;
