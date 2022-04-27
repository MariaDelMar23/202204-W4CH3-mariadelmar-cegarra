const Key = ({ numberButton, action }) => {
  return (
    <li>
      <button
        key={numberButton}
        className={typeof numberButton === "number" ? "key" : "key big"}
        onClick={action}
      >
        {numberButton}
      </button>
    </li>
  );
};

export default Key;
