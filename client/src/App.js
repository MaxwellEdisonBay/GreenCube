import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentation from './components/Presentation';
import Api from './components/Api';
import { ReactNotifications } from 'react-notifications-component'
import Header from './components/Header';
import Resume from './components/Resume';


function App() {

  const [pres, setPres] = useState([])

  useEffect(() => {
    const fetchPres = async () => {
      const res = await axios.get("https://ivan.beauty/links")
      setPres(res.data.links)
    }
    fetchPres()

  }, [])

  return (
    <BrowserRouter>
      <ReactNotifications/>
      <Header/>
      <Routes>
        <Route path="/" element={<Presentation pres={pres} setPres={setPres}/>} />
        <Route path="/api" element={<Api />} />
        <Route path="/contact" element={<Resume />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
