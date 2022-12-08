import { useState, useEffect } from "react";
import { Header, About, Resume, Contact, Footer } from "./containers";
import { Socials, Logo } from "./components";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1995);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading ">
          <div className="puff-in-center">
            <Logo size="45 15 220 190" width={"45mm"} height={"45mm"} />
          </div>
          <p> DALIBOR JAKSIC</p>
        </div>
      ) : (
        <div className="App">
          <Header />
          <About />
          <Resume />
          <Contact />
          <Socials />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
