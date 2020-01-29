import React from 'react';

const FullImage = ({src, fullHover}) => {

  return (
    <>
      <img 
        className="prodImage" 
        src={src} 
        onMouseEnter={fullHover}
        onMouseLeave={fullHover}
        />
    </>
  );
};

export default FullImage;
