import { useState, useEffect } from 'react';
import './App.css';

import { CheckApiConn } from './services/Api';

function App() {
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(true)


  // test api conn
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await CheckApiConn(); // Wait for the CheckApiConn function to resolve
        console.log(response)

        setMessage(response.data.message); // Access the response data
        setLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage("Failed to Load...")
        setLoading(false)
      }
    };

    fetchData();
    },
    []); // run once



  return (
    <div className="App">
      <header className="App-header">
        <p>
          {loading ? "Loading..." : message}
        </p>
      </header>
    </div>
  );
}

export default App;
