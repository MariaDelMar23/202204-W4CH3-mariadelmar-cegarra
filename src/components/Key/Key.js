const Key = ({ numberButton, action }) => {
  return (
    <li>
      <button key={numberButton} className="key" onClick={action}>
        {numberButton}
      </button>
    </li>
  );
};

export default Key;
