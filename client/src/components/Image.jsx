import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const Image = ({images, currentPhoto, id, hoverIt}) => {

  return (
    <div className="prodImage">
      <div className="fullImage">
        <div className="thumbnailsDiv">
        {/*map over thumbnails*/
        images.imgUrls.map((url, index)=> {
          return <Thumbnail key={id,index} i={index} image={url} hoverIt={hoverIt}/>
        })
        }
        </div>
        <img className="prodImage" src={currentPhoto} />
      </div>
    </div>
  );
};

export default Image;
