import React from "react";


function Name(props) {
  return (
    <div className="digiName">
      {props.digimon && props.digimon.name}
    </div>
  )
}

export default Name;
