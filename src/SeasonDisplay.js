import "./SeasonDisplay.css";
const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is cold",
    iconName: "snowFlake",
  },
};

const getSeason = (lat, month) => {
  //lat > 0 ? "Northern Hemisphere" : "Southern Hemisphere";
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  else return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`left-icon massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`right-icon massive ${iconName} icon`}></i>
    </div>
  );
};
export default SeasonDisplay;
