import TelefoneContext from "./TelefoneContext";

const TelefoneProvider = ({ children }) => {
  const textInfo = "Calling...";

  return (
    <TelefoneContext.Provider value={[textInfo]}>
      {children}
    </TelefoneContext.Provider>
  );
};

export default TelefoneProvider;
