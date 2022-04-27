import { useContext } from "react";
import TelefoneContext from "../../context/TelefoneContext";

const Actions = () => {
  const [isCalling] = useContext(TelefoneContext);

  return (
    isCalling && (
      <a href="call" className="call">
        Call
      </a>
    )
  )(
    !isCalling && (
      <a href="hang" className="hang active">
        Hang
      </a>
    )
  );
};

export default Actions;
