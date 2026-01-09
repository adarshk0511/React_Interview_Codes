const Histogram = ({ data }) => {
  const maxCount = Math.max(...data.map((d) => d.count));

  return (
    <div className="histogram">
      {data.map((item) => (
        <div key={item.year} className="bar-wrapper">
          <span className="count">{item.count}</span>
          <div
            className="bar"
            style={{ height: `${(item.count / maxCount) * 150}px` }}
          />
          <span className="label">{item.year}</span>
        </div>
      ))}
    </div>
  );
};

export default Histogram;
