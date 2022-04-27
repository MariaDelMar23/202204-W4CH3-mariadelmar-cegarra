import { useContext } from "react";
import TelefoneContext from "../../context/TelefoneContext";

const Display = () => {
  const [typedNumber] = useContext(TelefoneContext);

  return <span className="number">{typedNumber}</span>;
};

export default Display;
