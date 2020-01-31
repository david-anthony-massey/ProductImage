import React from 'react';

const FullImage = ({src, fullHover, clickIt}) => {

  return (
    <>
      <img 
        className="prodImage" 
        src={src} 
        onMouseEnter={fullHover}
        onMouseLeave={fullHover}
        onClick={clickIt}
        />
    </>
  );
};

export default FullImage;
