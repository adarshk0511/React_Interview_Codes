const GenTable = ({ rows, cols }) => {
  return (
    <div className="table">
      {[...Array(rows).keys()].map((row) => (
        <div className="row" key={row}>
          {[...Array(cols).keys()].map((col) => (
            <div className="cell" key={row * cols + col}>
              {row * cols + col + 1}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GenTable;
