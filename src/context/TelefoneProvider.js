import TelefoneContext from "./TelefoneContext";

const TelefoneProvider = ({ children }) => {
  const textInfo = "Calling...";

  const takeNumber = () => {};

  const deleteNumber = () => {};

  return (
    <TelefoneContext.Provider value={[textInfo, takeNumber, deleteNumber]}>
      {children}
    </TelefoneContext.Provider>
  );
};

export default TelefoneProvider;
