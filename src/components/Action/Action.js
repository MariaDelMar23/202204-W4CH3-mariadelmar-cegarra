import { useContext } from "react";
import TelefoneContext from "../../context/TelefoneContext";

const Action = () => {
  const [isCalling, toggleIsCalling, numberFilled] = useContext(TelefoneContext);

  return (
    isCalling && (
      <a href="call" className={numberFilled ? "call active" : "call"} onClick={toggleIsCalling}>
        Call
      </a>
    )
  )(
    !isCalling && (
      <a href="hang" className="hang active" onClick={toggleIsCalling}>
        Hang
      </a>
    )
  );
};

export default Action;
