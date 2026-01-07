import { useState, useMemo } from "react";
import users from "../data/users";

const DataTable = ({ users }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "null",
    direction: "ascending",
  });

  const sortedUsers = useMemo(() => {
    const sortableUsers = [...users];

    if (!sortConfig.key) return sortableUsers;

    sortableUsers.sort((a, b) => {
      const key = sortConfig.key;
      const direction = sortConfig.direction;

      const multiplier = direction === "ascending" ? 1 : -1;

      if (typeof a[key] === "string") {
        return a[key].localeCompare(b[key]) * multiplier;
      }

      return (a[key] - b[key]) * multiplier;
    });

    return sortableUsers;
  }, [users, sortConfig]);

  const sortData = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction:
            prev.direction === "ascending" ? "descending" : "ascending",
        };
      }

      // New column → reset to ascending
      return { key, direction: "ascending" };
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortData("name")}>
              name{" "}
              {sortConfig.key === "name"
                ? sortConfig.direction === "ascending"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
            <th onClick={() => sortData("email")}>
              email{" "}
              {sortConfig.key === "email"
                ? sortConfig.direction === "ascending"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
            <th onClick={() => sortData("age")}>
              age{" "}
              {sortConfig.key === "age"
                ? sortConfig.direction === "ascending"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
            <th onClick={() => sortData("role")}>
              role{" "}
              {sortConfig.key === "role"
                ? sortConfig.direction === "ascending"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
