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
        const response = await fetch("https://dummyjson.com/products"); // Fetch data
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`); // Handle HTTP errors
        }
        const result = await response.json(); // Parse JSON
        setData(result); // Update state with fetched data
      } catch (err) {
        setError(err.message); // Update state with error message
      }
    };

    fetchData(); // Call fetch function on component mount
  }, []); // Empty dependency array ensures this runs once

  return (
    <div>
      {/* Main container */}
      <h1>Data Fetched from API</h1>

      {error ? (
        // Display error message
        <div style={{ color: "red" }}>Error: {error}</div>
      ) : data ? (
        // Display fetched data
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        // Display loading state
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
