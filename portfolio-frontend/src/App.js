import { Header, About, Resume, Contact, Footer } from "./containers";
import { Socials } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Contact />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
