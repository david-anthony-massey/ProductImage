import React from 'react';

const Thumbnail = ({image}) => {
  return (
    <>
      <img className="thumbnail" src={image} width="50px"/>
    </>
  );
};

export default Thumbnail;
