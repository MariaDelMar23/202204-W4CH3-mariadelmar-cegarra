import { useState } from "react";
import TelefoneContext from "./TelefoneContext";

const TelefoneProvider = ({ children }) => {
  const [isCalling, setIsCalling] = useState(false)
  const [numberFilled, setNumberFilled] = useState(false)
  const [number, setNumber] = useState([]);
  const textInfo = "Calling...";

  const toggleIsCalling = (event) => {
    setIsCalling(!isCalling)
  }

  const takeNumber = (numberButton) => {
    if (number.length <=9){
      setNumber([...number, numberButton])
      setNumberFilled(false)
    }
    else{
      setNumber([...number])
      setNumberFilled(true)
    }
    
  };

  const deleteNumber = () => {
    setNumber([])
  };

  return (
    <TelefoneContext.Provider value={[isCalling, textInfo, takeNumber, deleteNumber, toggleIsCalling, numberFilled]}>
      {children}
    </TelefoneContext.Provider>
  );
};

export default TelefoneProvider;
