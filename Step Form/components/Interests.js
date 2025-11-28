const Interests = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleDataChange = (e, name) => {
    setData((preState) => ({
      ...preState,
      interests: e.target.checked
        ? [...preState.interests, e.target.name]
        : preState.interests.filter((i) => i !== e.target.name),
    }));
  };

  console.log(interests);
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />{" "}
          Coding
        </label>{" "}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          />{" "}
          Music
        </label>{" "}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="react"
            checked={interests.includes("react")}
            onChange={handleDataChange}
          />{" "}
          React
        </label>{" "}
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interests;
