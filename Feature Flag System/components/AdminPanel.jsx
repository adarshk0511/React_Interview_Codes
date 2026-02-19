import { useFeatureFlag } from "../hooks/useFeatureFlag";

export default function AdminPanel() {
  const { flags, toggleFlag } = useFeatureFlag();

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Feature Flags</h3>

      {Object.keys(flags).map((flag) => (
        <div key={flag}>
          <label>
            <input
              type="checkbox"
              checked={flags[flag]}
              onChange={() => toggleFlag(flag)}
            />
            {flag}
          </label>
        </div>
      ))}
    </div>
  );
}
