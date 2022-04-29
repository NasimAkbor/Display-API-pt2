import React from "react";


function Image(props) {
  return (
    <div>
      {
        <img className="imageBox" src={props.digimon && props.digimon.img} alt="digimon" />
      }
    </div>
  )
}

export default Image;
