import React from 'react';

const FullImage = ({src, fullHover, clickIt, className}) => {

  return (
    <>
      <img 
        className={className} 
        src={src} 
        onMouseEnter={fullHover}
        onMouseLeave={fullHover}
        onClick={clickIt}
        />
    </>
  );
};

export default FullImage;
