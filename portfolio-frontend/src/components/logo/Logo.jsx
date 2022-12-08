import "./logo.css";

function Logo({ size, width, height }) {
  return (
    <svg width={width} height={height} version="1.1" viewBox={size}>
      <g>
        <path
          className="logo"
          fillOpacity="1"
          strokeDasharray="none"
          strokeLinecap="butt"
          stroke="#5f5f5f"
          strokeLinejoin="bevel"
          strokeMiterlimit="0"
          strokeOpacity="1"
          strokeWidth="0.2rem"
          d="m 182.63184,40.606849 c -23.14731,0.425406 -56.7731,4.031676 -83.739879,8.115975 C 81.292175,91.21136 63.692386,133.69989 46.092597,176.18843 c 23.041516,12.02067 63.377523,9.35466 72.154453,-12.71675 h -5.2e-4 l 21.1,-51.26561 -26.30433,-0.004 -2.52957,-5.2e-4 12.02614,-29.321205 30.47928,-5.16e-4 35.51825,0.0021 -12.10366,29.329991 -20.2954,49.31171 c -19.14624,46.51849 -25.04863,47.88708 -72.530974,52.14514 l 71.897874,0.43088 C 226.3013,208.16967 291.14946,99.181611 222.48401,49.789877 211.16807,42.6484 192.37127,40.409275 182.63184,40.606849 Z"
          paintOrder="normal"
        >
          {" "}
        </path>
      </g>
    </svg>
  );
}

export default Logo;
