import React from "react";


function Name2(props) {
  return (
    <div className="digiName2">
      {props.digimon && props.digimon.name}
    </div>
  )
}

export default Name2;
