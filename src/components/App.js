import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState(null); // Initialize state with null

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json()) // Parse JSON data
      .then(data => setData(data)) // Update state with fetched data
      .catch(error => setData(error)); // Log errors
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Data Fetched from API</h1>
      <pre>
        {data ? JSON.stringify(data, null, 2) : "Loading..."} {/* Display formatted JSON or loading message */}
      </pre>
    </div>
  );
};

export default App;
