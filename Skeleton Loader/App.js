import { useEffect, useState } from "react";
import UserCard from "./components/userCard";
import UserSkeleton from "./components/userSkeleton";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "Ada Lovelace",
          email: "ada@analytics.io",
          avatar: "https://i.pravatar.cc/150?img=12",
        });
      }, 2000);
    });

  useEffect(() => {
    fetchUser().then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h1>Skeleton Loader</h1>
      {loading ? <UserSkeleton /> : <UserCard user={user} />}
    </div>
  );
}
