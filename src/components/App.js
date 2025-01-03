import React, { useEffect, useState } from "react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import './../styles/App.css';


const App = () => {
  const [data, setData] = useState(null); // Holds the fetched data
  const [error, setError] = useState(null); // Holds error messages

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products"); // Simulating error
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json(); // Parse JSON
        setData(result); // Update state with fetched data
        setError(null); // Clear error state
      } catch (err) {
        setError(`An error occurred: ${err.message}`); // Update error state
      }
    };

    fetchData(); // Call fetch function on component mount
  }, []); // Empty dependency array ensures this runs once

  return (
    <div id="root">
      <h1>Data Fetched from API</h1>
      {error ? (
        // Ensure the error message is clearly rendered
        <div id="error-message" style={{ color: "red" }}>
          {error}
        </div>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
