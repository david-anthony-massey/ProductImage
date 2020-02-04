import React from 'react';

const Thumbnail = ({image, hoverChoose, i, className, clickChoose}) => {

  return (
    <>
      <img 
        className={className} 
        i={i} 
        src={image} 
        onMouseEnter={hoverChoose}
        onMouseLeave={hoverChoose}
        onClick={clickChoose}
        />
    </>
  );
};

export default Thumbnail;
