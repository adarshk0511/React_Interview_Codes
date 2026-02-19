import { useFeatureFlag } from "../hooks/useFeatureFlag";

export default function Dashboard() {
  const { isEnabled } = useFeatureFlag();

  return (
    <div>
      <h1>Main Dashboard</h1>

      {isEnabled("newDashboard") && <div>🚀 New Dashboard UI</div>}

      {isEnabled("betaChat") && <div>💬 Beta Chat Enabled</div>}

      {isEnabled("advancedAnalytics") && <div>📊 Advanced Analytics Panel</div>}
    </div>
  );
}
