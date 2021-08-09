import React from "react";

function DropDown(props) {
  function unitValue(event) {
    props.getUnit(event.target.value);
  }
  return (
    <div className="drop-down">
      <select on onChange={unitValue} className="drop-down-list" name="metric">
        <option value="metric">Celcius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
    </div>
  );
}

export default DropDown;
