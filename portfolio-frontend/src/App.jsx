import { useState, useEffect } from "react";
import { Header, About, Resume, Contact, Services } from "./containers";
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
    <div>
      {loading ? (
        <div className="loading ">
          <div className="puff-in-center">
            <Logo size="42 -10  220 240" width={"15rem"} height={"15rem"} />
          </div>
          <p> DALIBOR JAKSIC</p>
        </div>
      ) : (
        <div className="App">
          <Header />
          <About />
          <Resume />
          <Contact />
          <Services />
        </div>
      )}
    </div>
  );
}

export default App;
