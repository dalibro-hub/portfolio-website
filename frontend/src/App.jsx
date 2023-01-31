import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Resume, About, Contact, Services } from "./containers";
import { Logo } from "./components";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 12);
  }, []);
  return (
    <Router>
      {loading ? (
        <div className="loading ">
          <div className="puff-in-center">
            <Logo size="42 -10  220 240" width={"15rem"} height={"15rem"} />
          </div>
          <p> DALIBOR JAKSIC</p>
        </div>
      ) : (
        <div className="App">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="resume" element={<Resume />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
