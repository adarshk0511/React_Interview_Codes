import "./styles.css";
import users from "./data/users";
import DataTable from "./components/dataTable";
export default function App() {
  return (
    <div className="App">
      <h1>Data Table II</h1>
      <DataTable users={users} />
    </div>
  );
}
