import React from 'react';

const Thumbnail = ({image, hoverChoose, i, className}) => {

  return (
    <>
      <img className={className} 
        i={i} 
        src={image} 
        onMouseEnter={hoverChoose}
        onMouseLeave={hoverChoose}/>
    </>
  );
};

export default Thumbnail;
