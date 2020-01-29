import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const Image = ({image}) => {
  return (
    <div className="prodImage">
      <div className="fullImage">
        <div className="thumbnailsDiv">
        {/*map over thumbnails*/
        <Thumbnail image={image} />
        }
        </div>
        <img className="prodImage" src={image} width="400px"/>
      </div>
    </div>
  );
};

export default Image;
