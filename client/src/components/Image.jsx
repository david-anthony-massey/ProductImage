import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const Image = ({images, id, hoverIt}) => {

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
        <img className="prodImage" src={images.imgUrls[0]} />
      </div>
    </div>
  );
};

export default Image;
