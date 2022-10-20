import { Navbar } from "./components";
import { Header, About, Resume } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Resume />
    </div>
  );
}

export default App;
