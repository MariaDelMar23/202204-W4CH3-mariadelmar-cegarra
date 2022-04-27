import { useContext } from "react";
import TelefoneContext from "../../context/TelefoneContext";
import Key from "../Key/Key";

const Keyboard = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const buttonText = "delete";
  const [takeNumber, deleteNumber] = useContext(TelefoneContext);

  return (
    <>
      {numbers.map((number) => (
        <Key numberButton={number} action={takeNumber} />
      ))}
      <Key numberButton={buttonText} action={deleteNumber} />
    </>
  );
};

export default Keyboard;
