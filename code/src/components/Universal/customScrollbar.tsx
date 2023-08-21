import Scrollbar from "react-scrollbars-custom";

const customScrollbar = () => {
  return <Scrollbar createContext={true} noScrollX={true} id="scrollbar" />;
};

export default customScrollbar;
