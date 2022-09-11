import "./header.css";

function Header() {
  return (
    <div className="pf__Header-container">
      <div className="pf__Header-container-heading">
        <h1>DALIBOR JAKSIC</h1>
        <h4>web developer</h4>
      </div>
      <button type="button" className="smf-button scale-up-center">
        Contact
      </button>
    </div>
  );
}

export default Header;
