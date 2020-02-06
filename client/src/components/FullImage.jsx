import React from 'react';

const FullImage = ({id, src, fullHover, clickIt, className}) => {

  return (
    <>
      <img 
        data-id={id}
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
