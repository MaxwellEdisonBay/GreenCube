import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'



function App() {

  const [links, setLinks] = useState([])

  useEffect(() => {
    const fetchLinks = async () => {
      const res = await axios.get("/links")
      setLinks(res.data.links)
    }
    fetchLinks()
    console.log(links)
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{links.toString()}</p>
      </header>
    </div>
  );
}

export default App;
