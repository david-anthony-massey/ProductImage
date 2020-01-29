import React from 'react';

const FullImage = ({src, hover, hoverText}) => {

  return (
    <>
      <img 
        className="prodImage" 
        src={src} 
        onMouseEnter={hoverText} 
        />
    </>
  );
};

export default FullImage;
