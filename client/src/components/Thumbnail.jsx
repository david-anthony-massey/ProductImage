import React from 'react';

const Thumbnail = ({image, hoverIt, i}) => {

  return (
    <>
      <br></br>
      <img className="thumbnail" 
        i={i} 
        src={image} 
        onMouseEnter={hoverIt}
        onMouseLeave={hoverIt}/>
    </>
  );
};

export default Thumbnail;
