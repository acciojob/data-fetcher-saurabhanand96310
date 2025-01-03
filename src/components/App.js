import React, { useEffect, useState } from "react";
import './../styles/App.css';
import "core-js/stable";
import "regenerator-runtime/runtime";

// import { error } from "cypress/types/jquery";

const App = () => {
  const [data, setData] = useState(null); // Initialize state with null

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then(response => response.json()) // Parse JSON data
    //   .then(data => setData(data)) // Update state with fetched data
    //   .catch(error => setData(error)); // Log errors
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products"); // Fetch data
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json(); // Parse JSON data
        setData(result); // Update state with fetched data
      } catch (error) {
        setData(error.mess) // Log errors
      }
    };

    fetchData(); 
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
