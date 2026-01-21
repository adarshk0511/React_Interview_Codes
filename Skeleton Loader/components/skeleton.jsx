const Skeleton = ({ width = "100%", height = "16px", radius = "4px" }) => {
  return (
    <div
      className="skeleton"
      style={{
        width,
        height,
        borderRadius: radius,
      }}
    />
  );
};

export default Skeleton;
