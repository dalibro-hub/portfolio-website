import "./feature.css";

function Feature({ iconURL, title, text, className }) {
  return (
    <div className={className}>
      <img src={iconURL} alt="features_icon" />
      <h4 className="pf__Feature-title">{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default Feature;
