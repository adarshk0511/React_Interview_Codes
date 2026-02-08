const ProgressBar = ({ progress }) => {
  return (
    <div
      style={{
        height: "10px",
        width: "200px",
        background: "#ddd",
        transition: "width 0.3s",
        border: "1px solid",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          transition: "width 0.3s",
          background: "#4caf50",
          zIndex: 2,
        }}
      ></div>
      {progress}%
    </div>
  );
};

export default ProgressBar;
