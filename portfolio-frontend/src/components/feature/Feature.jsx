import "./feature.css";

function Feature({ iconURL, title }) {
  return (
    <div className="pf__Feature">
      <img src={iconURL} alt="features_icon" />
      <p>{title}</p>
    </div>
  );
}

export default Feature;
