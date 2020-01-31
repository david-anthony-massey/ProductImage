import React from 'react';

const Thumbnail = ({image, hoverChoose, i}) => {

  return (
    <>
      <br></br>
      <img className="thumbnail" 
        i={i} 
        src={image} 
        onMouseEnter={hoverChoose}
        onMouseLeave={hoverChoose}/>
    </>
  );
};

export default Thumbnail;
