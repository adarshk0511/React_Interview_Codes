export default Cell = ({ filled, onClick, isDisbled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisbled}
      className={`cell  ${filled ? "active" : ""}`}
    ></button>
  );
};
