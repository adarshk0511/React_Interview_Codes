import FeatureTour from "./components/featureTour";
import "./styles.css";

export default function App() {
  return (
    <div>
      {/* Actual page content */}
      <div
        id="orders-widget"
        style={{ margin: "200px", padding: "40px", background: "#eee" }}
      >
        Orders Widget
      </div>
      <div
        id="performance-metrics"
        style={{ margin: "200px", padding: "40px", background: "#eee" }}
      >
        Performance Metrics
      </div>
      <div
        id="notifications-icon"
        style={{ margin: "200px", padding: "40px", background: "#eee" }}
      >
        🔔 Notifications
      </div>
      <div
        id="profile-menu"
        style={{ margin: "200px", padding: "40px", background: "#eee" }}
      >
        Profile
      </div>
      <div
        id="help-section"
        style={{ margin: "200px", padding: "40px", background: "#eee" }}
      >
        Help Center
      </div>

      {/* Tour overlay */}
      <FeatureTour />
    </div>
  );
}
