import { useContext } from "react";
import TelefoneContext from "../../context/TelefoneContext";

const Info = () => {
  const [text] = useContext(TelefoneContext);

  return <span className="message">{text}</span>;
};

export default Info;
