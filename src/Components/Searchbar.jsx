import React, { useEffect, useState } from "react";
import data from "../data/datafyprn.json";

function Searchbar({ setResults, setQuery, query }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, []);

  const getResult = (value) => {
    const result = users.filter((user) => {
      return (
        value &&
        user &&
        user["Student Name"] &&
        user["Student Name"].toLowerCase().includes(query.toLowerCase())
      );
    });
    setResults(result);
  };

  const handleChange = (value) => {
    setQuery(value);
    getResult(value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="focus:outline-none w-3/5 h-11 p-4 rounded-full"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}

export default Searchbar;
