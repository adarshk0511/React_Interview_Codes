const Settings = ({ data, setData, errors }) => {
  const { theme } = data;

  const handleDataChange = (e) => {
    setData((preState) => ({
      ...preState,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleDataChange}
          />{" "}
          Dark
        </label>{" "}
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleDataChange}
          />{" "}
          Light
        </label>{" "}
      </div>
    </div>
  );
};

export default Settings;
