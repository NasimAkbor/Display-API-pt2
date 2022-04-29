import React from "react";


function Image(props) {
  return (
    <div>
      {
        <img className="imageBox" src={props.digimon && props.digimon.img} />
      }
    </div>
  )
}

export default Image;
