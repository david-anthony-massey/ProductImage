import React from 'react';

const Thumbnail = ({image, hoverIt}) => {

  return (
    <>
      <br></br>
      <img className="thumbnail" src={image} 
        onMouseEnter={hoverIt}
        onMouseLeave={hoverIt}/>
    </>
  );
};

export default Thumbnail;
