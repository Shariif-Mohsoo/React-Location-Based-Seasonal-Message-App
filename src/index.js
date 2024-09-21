// import "semantic-ui-css/semantic.min.css";
import React from "react";
import reactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const el = document.querySelector("#root");
const root = reactDOM.createRoot(el);
class App extends React.Component {
  //automatically set in constructor
  state = { lat: null, errorMess: "" };
  //componentDidMount
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMess: err.message })
    );
  }
  //react says we have to define the render
  render() {
    const content = this.state.errorMess ? (
      this.state.errorMess
    ) : (
      <SeasonDisplay lat={this.state.lat} />
    );
    return (
      <div>
        {content || <Spinner message="Please Allow Access To Location" />}
      </div>
    );
  }
}

root.render(<App />);
