import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="h-screen w-screen bg-bg flex justify-center items-center">
      <ReactLoading type={"bars"} color={"#48295b"} height={250} width={250} />
    </div>
  );
};

export default Loading;
