import { useContext } from "react";
import TelefoneContext from "../../context/TelefoneContext";

const Info = () => {
  const [text, isCalling] = useContext(TelefoneContext);

  return <span className={isCalling ? "message" : "off"}>{text}</span>;
};

export default Info;
