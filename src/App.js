import "./App.css";
import React, { useState, usestate } from "react";
import { Users } from "./users";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  console.log(Users[0]["first_name"]);

  const search = (data) => {
    return data.filter(
      (item) => keys.some((key) => item[key].toLowerCase().includes(query))
      /*item.first_name.toLowerCase().includes(query) ||
        item.last_name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)*/
    );
  };
  return (
    <div className="App">
      <header className="App-header">React Search Filter by Lama Dev</header>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(event) => setQuery(event.target.value)}
      />
      <Table data={search(Users)} />

      {/*<ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
            {""}
          </li>
        ))}
        </ul>*/}
    </div>
  );
}

export default App;
