import React from "react";
function Spinner({ message }) {
  return (
    <div>
      <div class="ui active dimmer">
        <div class="ui big text loader">{message}</div>
      </div>
    </div>
  );
}
Spinner.defaultProps = {
  message: "Loading....",
};
export default Spinner;
