import { useEffect, useState } from "react";
import "./styles.css";
import User from "./User";

export default function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data));
  // }, []);
  useEffect(() => {
    async function myFn() {
      setError(null);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    }
    myFn();
  }, []);
  let content = "No users found";
  if (error) {
    content = error;
  }
  if (users.length > 0) {
    content = users.map((user) => <User user={user} />);
  }
  return (
    <div className="App">
      <ul>{content}</ul>
    </div>
  );
}
