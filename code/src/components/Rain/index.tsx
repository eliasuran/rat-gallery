import RainDrop from "./raindrops";

const RainContainer = () => {
  return (
    <div className="z-10 absolute h-full w-full inset-0 bg-red-500">
      <RainDrop />
    </div>
  );
};

export default RainContainer;
