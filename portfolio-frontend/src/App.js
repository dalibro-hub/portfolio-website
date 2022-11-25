import { Navbar } from "./components";
import { Header, About, Resume, Contact, Footer } from "./containers";
import { Socials} from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
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
